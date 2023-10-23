import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from "@mui/material/Stepper";
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import AddressForm from "./forms/AddressForm";
import PlaceOrderForm from "./forms/PlaceOrderForm";
import "./stepper.css";
import PlaceOrder from "../PlaceOrder";
import { useNavigate } from "react-router-dom";

const getStepContent = (stepIndex, handleComplete) => {
  switch (stepIndex) {
    case 0:
      return <PersonalInfoForm handleComplete={handleComplete} />;
    case 1:
      return <AddressForm handleComplete={handleComplete} />;
    case 2:
      return <PlaceOrderForm handleComplete={handleComplete} />;
    default:
      return "Unknown Steps";
  }
};

// Component
const StepperComponent = () => {
  let navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0); // Set Active Step
  const [completed, setCompleted] = React.useState({});

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  // Handle Next Button
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const allStepsCompleted = () => {
    return Object.keys(completed).length === steps.length;
  }

  const handleStep = (step) => {
    setActiveStep(step);

  }

  // Handle Reset Button
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    navigate("/");
  };

  const steps = ["Personal Information", "Address Information", "Place Order"];

  // Return
  return (
    <div className="root">
      <div className="stepper">
        {allStepsCompleted() ? (
            <div>
                <PlaceOrder />
                <Button onClick={handleReset}>Go To Homepage</Button>
            </div>
        ) : (
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={() => handleStep(index)}>{label}</StepButton>
                </Step>
              ))}
            </Stepper>
        )}
      </div>
      <div>
        {/* If steps are completed or not */}
        {(activeStep < steps.length) && (
          <div>
            <Typography className="instructions">
              {getStepContent(activeStep, handleComplete)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperComponent;

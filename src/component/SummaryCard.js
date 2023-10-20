import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../App.css";

export default function SummaryCard({ items, amount }) {
  return (
    <Card className="card" variant="elevation" elevation={8}>
      <CardContent>
        <Typography className="title" variant="h3" gutterBottom>
          Order Summary
        </Typography>

        <Typography className="summary-text" color="textSecondary">
          Total Items : <strong className="summary-text">{items}</strong>
        </Typography>
        <Typography className="summary-text" variant="h5" gutterBottom>
          Total Amount : <strong className="summary-text">₹{amount}</strong>
        </Typography>
        {amount > 0 && (
          <Link className="hvr-grow about-button" to="/checkout">
            Proceed to Checkout
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

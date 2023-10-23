import React, { createContext, useReducer, useContext } from "react";

export const ShippingContext = createContext([]);
export const ShippingDispatchContext = createContext(null);

export function useShipping() {
    return useContext(ShippingContext);
}

export function useShippingDispatch() {
    return useContext(ShippingDispatchContext);
}

export const initialShippingDetails = {
    "personalInfo": {
        "firstName": null,
        "lastName": null,
        "email": null
    },
    "addressInfo": {
        "address": null,
        "city": null,
        "state": null,
        "pinCode": null,
        "country": null
    }
};

export function ShippingProvider({children}) {
    const [shipping, dispatchShipping] = useReducer(shippingReducer, initialShippingDetails);

    return (
        <ShippingContext.Provider value = {shipping}>
            <ShippingDispatchContext.Provider value = {dispatchShipping}>
                {children}
            </ShippingDispatchContext.Provider>
        </ShippingContext.Provider>
    );
}

function shippingReducer(shipping, action) {
    switch (action.type) {
        case 'updatePersonalInfo': {
            return {
                ...shipping,
                "personalInfo": {
                    "firstName": action.firstName,
                    "lastName": action.lastName,
                    "email": action.email
                }
            }
        }
        case 'updateAddressInfo': {
            return {
                ...shipping,
                "addressInfo": {
                    "address": action.address,
                    "city": action.city,
                    "state": action.state,
                    "pinCode": action.pinCode,
                    "country": action.country
                }
            }
        }
        case 'resetShippingDetails': {
            return initialShippingDetails;
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}


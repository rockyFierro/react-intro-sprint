import React from "react";



const Order = ({pizza}) => {
    console.log(pizza)
    return (
        <div>
            {pizza ? <div>
                    {pizza.map(use => (
                        <div>
                            <h1>Your Order Details</h1>
                            <div>Name: {use.name}</div>
                            <div>Size: {(use.size === "Small" ? "Small"
                                    : use.size === "Medium" ? "Medium"
                                        : use.size === "Large" ? "Large"
                                            : use.size === "Family" ? "Family"
                                                : null
                            )}</div>


                            <div>Pepperoni: {(use.pep === true) ? "Yes" : "No"}</div>
                            <div>Sausage: {(use.saus === true) ? "Yes" : "No"}</div>
                            <div>Canadian Bacon: {(use.bacon === true) ? "Yes" : "No"}</div>
                            <div>Chicken: {(use.chx === true) ? "Yes" : "No"}</div>

                            <div>Peppers:{(use.pepper === true) ? "Yes" : "No"}</div>
                            <div>Olives:{(use.olives === true) ? "Yes" : "No"}</div>
                            <div>Jalapenos:{(use.jala === true) ? "Yes" : "No"}</div>
                            <div>Onions:{(use.oni === true) ? "Yes" : "No"}</div>

                            <div>Special Instructions:{use.inst}</div>
                        </div>
                    ))}
                </div>
                : <div />
            }
        </div>

    );
};

export default Order;
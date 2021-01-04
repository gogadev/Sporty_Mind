import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const Stripe = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_3O3phZzRzwu9c8cIKP0JHMqQ0043X3NmNf";

  const onToken = (token) => {
    toast("Payment Successful", { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sporty Mind Ltd."
      billingAddress
      shippingAddress
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK8SgU2vAgBUrHj69HXZLofirQDLZxyQ5_cNHljWqG8Gx01GfG"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default Stripe;

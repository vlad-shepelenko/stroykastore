import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import "./chekoutform.scss";
import OrderService from "../../service/OrderService";
import axios from "axios";

const CheckoutForm = (data) => {
  const stripe = useStripe();
  const elements = useElements();
  const obj = data.data;
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const setOrder = async (order) => {
    const response = await OrderService.setOrder(order);
    console.log(response);
  }

  const deleteUserCart = async (id) => {
    try{
          console.log(id)
          const response = axios.delete(
            `http://localhost:5000/api/deleteUserCartById/${id}`
          );
    }
    catch(e){
      console.log(e)
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/thanks`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Непредвиденная ошибка");
    }
    setOrder([obj])
    deleteUserCart(obj.userId)
    setIsProcessing(false);
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button disabled={isProcessing || !stripe || !elements} id="submit">
          <span id="button-text">
            {isProcessing ? "Processing ..." : "Pay now"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
};

export default CheckoutForm;

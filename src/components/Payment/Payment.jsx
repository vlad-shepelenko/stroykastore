import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import PaymentService from "../../service/PaymentService";
import OrderService from "../../service/OrderService";

const Payment = (price) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const setData = price.data;
  let arrayProduct = [];
  let user;
  let status = "Оплачено";
  let today = new Date().toLocaleDateString();

  setData.map((el) => {
    let resultPrice = el.product.productPrice * el.info.count;
    arrayProduct.push([
      el.product.productName,
      el.product.productImage,
      resultPrice.toFixed(2),
      el.info.count,
    ]);
    user = el.info.user;
  });

  let obj = {
    userId: user,
    status,
    products: arrayProduct,
    data: today,
  };
  
  useEffect(() => {
    getConfig();
  }, []);

  const getConfig = async () => {
    const response = await PaymentService.getConfig();
    const { publishableKey } = response.data;
    setStripePromise(await loadStripe(publishableKey));
  };

  let paymentAmount = price.price * 100;
  useEffect(() => {
    createPayment(paymentAmount);
  }, []);

  const createPayment = async (pric) => {
    const response = await PaymentService.createPayment(pric);
    const { clientSecret } = response.data;
    setClientSecret(clientSecret);
  };

  return (
    <>
      <h1>Оплата</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm data={obj} />
        </Elements>
      )}
    </>
  );
};

export default Payment;

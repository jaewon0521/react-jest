import React from "react";
import SummaryForm from "./SummaryForm";

const OrderSummary = () => {
  return (
    <div>
      <h1>Order Summary</h1>
      <section>
        <h2>Scope:$6.00</h2>
        <ul>
          <li>3 Vanilla</li>
        </ul>
      </section>
      <section>
        <h2>Toppings: $4.50</h2>
        <ul>
          <li>M&Ms</li>
          <li>Hot fudge</li>
          <li>Gummi bears</li>
        </ul>
      </section>
      <section>
        <h2>Total $10.50</h2>
      </section>
      <SummaryForm />
    </div>
  );
};

export default OrderSummary;

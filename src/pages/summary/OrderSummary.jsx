import React from "react";

const OrderSummary = () => {
  return (
    <div>
      <h3>Order Summary</h3>
      <section>
        <h2>Scope:$6.00</h2>
        <ol>
          <li>3 Vanilla</li>
        </ol>
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
    </div>
  );
};

export default OrderSummary;

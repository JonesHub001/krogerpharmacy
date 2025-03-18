import React from 'react';
import OrderForm from '../components/Order/OrderForm';

const Order: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Place Your Order
      </h1>
      <OrderForm />
    </div>
  );
};

export default Order;

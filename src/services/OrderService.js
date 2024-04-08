import Order from "../models/data-models/Order";
import OrderDetail from "../models/data-models/OrderDetail";
import Payment from "../models/data-models/Payment";
import { v4 as uuidv4 } from "uuid";

export const postOrderService = async (req, transaction) => {
  const { product_id, price, quantity, delivery_charge, payment_info } =
    req.body;
  const grandTotal =
    price.reduce((acc, value, index) => acc + value * quantity[index], 0) +
    (delivery_charge ? delivery_charge : 0);
  const payment = await Payment.create(
    {
      name: payment_info.name,
      email: payment_info.email,
      billing_address: {
        address1: payment_info.billing_address.address1,
        address2: payment_info.billing_address.address2,
        phone: payment_info.billing_address.phone,
      },
      payment_type: payment_info.payment_type,
    },
    { transaction: transaction }
  );
  if (payment) {
    const order = await Order.create(
      {
        order_code: Math.floor(100000 + Math.random() * 900000),
        user_id: uuidv4(), // get user_id from user token
        payment_id: payment.id,
        delivery_charge: delivery_charge,
        grand_total: grandTotal,
      },
      { transaction: transaction }
    );
    if (order) {
      for (let index = 0; index < product_id.length; index++) {
        await OrderDetail.create(
          {
            order_id: order.id,
            product_id: product_id[index],
            quantity: quantity[index],
            price: price[index],
            subtotal: price[index] * quantity[index],
          },
          { transaction: transaction }
        );
      }
      await transaction.commit();
      return {
        message: "Order placed successfully",
        data: {
          order_id: order.id,
        },
      };
    }
  }
  throw new Error("Failed to place order");
};

export const getOrderByIdService = async (req) => {
  const { id } = req.params;
  req.body;
  const order = await Order.findOne({
    where: { id: id },
    include: [
      { model: OrderDetail, required: false },
      { model: Payment, required: false },
    ],
  });
  console.log("order", order);
  if (!order) throw new Error("Order not found");
  return {
    message: "Order get successfully",
    data: order,
  };
};

export const updateOrderByIdService = async (req) => {
  const { id } = req.params;
  const { payment_info } = req.body;
  const order = await Order.findOne({
    where: { id: id },
  });
  if (!order) throw new Error("Order not found");
  await Payment.update({
    name: payment_info.name,
    email: payment_info.email,
    billing_address: {
      address1: payment_info.billing_address.address1,
      address2: payment_info.billing_address.address2,
      phone: payment_info.billing_address.phone,
    },
  }, {
    where: {id: order.payment_id}
  });
  return {
    message: "Order updated successfully",
    data: {
      order_id: order.id
    },
  };
};

export const updateOrderStatusService = async (req) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findOne({
    where: { id: id },
  });
  if (!order) throw new Error("Order not found");
  await Order.update({
    status: status
  }, {
    where: {id: id}
  })
  return {
    message: "Order status updated successfully",
    data: {
      order_id: order.id,
    },
  };
};

export const deleteOrderByIdService = async (req, transaction) => {
  const { id } = req.params;
  const order = await Order.findOne({
    where: { id: id },
  });
  if (!order) throw new Error("Order not found");
  const deleteOrder = await Order.destroy({
    where: { id: id },
    transaction: transaction
  });
  if (deleteOrder) {
    const deletePayment = await Payment.destroy({
      where: { id: order.payment_id },
      transaction: transaction
    });
    if (deletePayment) {
      await OrderDetail.destroy({
        where: { order_id: order.id },
        transaction: transaction
      });
      await transaction.commit();
      return {
        message: 'Order deleted successfully',
        data: {
          order_id: order.id
        }
      };
    }
  }
  throw new Error('Failed to delete order');
};

export default {};

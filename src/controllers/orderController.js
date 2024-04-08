import {
  postOrderService,
  getOrderByIdService,
  updateOrderByIdService,
  updateOrderStatusService,
  deleteOrderByIdService,
} from "../services/OrderService";
import { apiFailed, apiSuccess } from "../utilities/apiResponse";
import sequelize from "../config/sequelize";

export const postOrder = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const order = await postOrderService(req, transaction);
    return res.json(apiSuccess(order.message, order.data));
  } catch (error) {
    await transaction.rollback();
    return res.json(apiFailed(error.message));
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await getOrderByIdService(req);
    return res.json(apiSuccess(order.message, order.data));
  } catch (error) {
    return res.json(apiFailed(error.message));
  }
};

export const updateOrderById = async (req, res, next) => {
  try {
    const order = await updateOrderByIdService(req);
    return res.json(apiSuccess(order.message, order.data));
  } catch (error) {
    return res.json(apiFailed(error.message));
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const order = await updateOrderStatusService(req);
    return res.json(apiSuccess(order.message, order.data));
  } catch (error) {
    return res.json(apiFailed(error.message));
  }
};

export const deleteOrderById = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const order = await deleteOrderByIdService(req, transaction);
    return res.json(apiSuccess(order.message, order.data));
  } catch (error) {
    await transaction.rollback();
    return res.json(apiFailed(error.message));
  }
};

export default {};

import express from "express";

import {
  postOrder,
  getOrderById,
  updateOrderById,
    updateOrderStatus,
  deleteOrderById
} from "../../controllers/orderController";
import { handleValidation } from "../../middlewares";
import validators from "../../models/request-models";

const router = express.Router();

router.post(
  "/",
  handleValidation(validators.postOrderSchemaValidate),
  postOrder
);
router.get("/:id", getOrderById);
router.put(
  "/:id",
  handleValidation(validators.updateOrderSchemaValidate),
  updateOrderById
);
router.patch(
  "/:id",
  handleValidation(validators.updateOrderStatusSchemaValidate),
  updateOrderStatus
);
router.delete("/:id", deleteOrderById);

export default router;

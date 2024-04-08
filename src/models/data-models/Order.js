import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize";
import OrderDetail from "./OrderDetail";
import Payment from "./Payment";

const Order = sequelize.define(
  "Order",
  {
    order_code: { type: DataTypes.STRING(100), allowNull: false },
    user_id: { type: DataTypes.STRING(200), allowNull: true },
    payment_id: { type: DataTypes.INTEGER, allowNull: true },
    delivery_charge: { type: DataTypes.DOUBLE(8, 2), defaultValue: 0 },
    grand_total: { type: DataTypes.DOUBLE(8, 2), defaultValue: 0 },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "accepted",
        "picked_up",
        "way_to_deliver",
        "delivered",
        "cancelled"
      ),
      defaultValue: "pending",
    },
  },
  {
    tableName: "orders",
    timestamps: true,
  }
);

Order.hasMany(OrderDetail, { foreignKey: "order_id" });
Order.belongsTo(Payment, { foreignKey: "payment_id" });

export default Order;

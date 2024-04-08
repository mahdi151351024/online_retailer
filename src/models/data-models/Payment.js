import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize";

const Payment = sequelize.define(
  "Payment",
  {
    name: { type: DataTypes.TEXT, allowNull: false },
    email: { type: DataTypes.TEXT, allowNull: true },
    billing_address: { type: DataTypes.JSONB, defaultValue: null },
    payment_type: {
      type: DataTypes.ENUM("cod", "digital"),
      defaultValue: "cod",
    },
    payment_response: { type: DataTypes.JSONB, defaultValue: null },
    status: { type: DataTypes.ENUM("paid", "unpaid"), defaultValue: "unpaid" },
  },
  {
    tableName: "payments",
    timestamps: true,
  }
);

export default Payment;

import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const OrderDetail = sequelize.define(
  "OrderDetail",
  {
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    price: { type: DataTypes.DOUBLE(8,2), defaultValue: 0 },
    subtotal: { type: DataTypes.DOUBLE(8,2), defaultValue: 0 }
  },
  {
    tableName: "order_details",
    timestamps: true,
  }
);
 
export default OrderDetail;

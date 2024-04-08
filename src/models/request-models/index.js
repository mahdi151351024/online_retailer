import postOrderValidate from './post-order-request-model';
import updateOrderValidate from './update-order-request-model';
import updateOrderStatusValidate from './update-order-status-request-model';

const validators = {
  postOrderSchemaValidate: postOrderValidate,
  updateOrderSchemaValidate: updateOrderValidate,
  updateOrderStatusSchemaValidate: updateOrderStatusValidate,
};

export default validators;

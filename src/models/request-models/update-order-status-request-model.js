import Joi from 'joi';

const schema = Joi.object().keys({
  status: Joi.valid(
    "accepted",
    "picked_up",
    "way_to_deliver",
    "delivered",
    "cancelled"
  ).required(),
});

const validate = (data) => {
    const result = schema.validate(data);
    result.value = data;
    return result;
};

export default validate;

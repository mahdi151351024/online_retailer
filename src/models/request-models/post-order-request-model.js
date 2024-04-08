import Joi from 'joi';

const schema = Joi.object().keys({
    product_id: Joi.array().required(),
    quantity: Joi.array().required(),
    price: Joi.array().required(),
    delivery_charge: Joi.number().required(),
    payment_info: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        billing_address: Joi.object().keys({
            address1: Joi.string().required(),
            address2: Joi.string().optional(),
            phone: Joi.string().required()
        }).required(),
        payment_type: Joi.valid('cod', 'digital').required()
    }).required()
});

const validate = (data) => {
    const result = schema.validate(data);
    result.value = data;
    return result;
};

export default validate;

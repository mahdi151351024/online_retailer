import Joi from 'joi';

const schema = Joi.object().keys({
    payment_info: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        billing_address: Joi.object().keys({
            address1: Joi.string().required(),
            address2: Joi.string().optional(),
            phone: Joi.string().required()
        }).required()
    }).required()
});

const validate = (data) => {
    const result = schema.validate(data);
    result.value = data;
    return result;
};

export default validate;

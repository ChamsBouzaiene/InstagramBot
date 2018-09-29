import Joi from "joi";

export const schema = Joi.object().keys({
  user: Joi.string()
    .alphanum()
    .min(8)
    .max(30)
    .required(),
  pass: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .min(8)
    .max(20)
    .required()
});
export const schema2 = Joi.object().keys({
  firstname: Joi.string()
    .alphanum()
    .min(4)
    .max(20)
    .required(),
  lastname: Joi.string()
    .alphanum()
    .min(4)
    .max(20)
    .required(),
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required(),
  pass: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .min(8)
    .max(20)
    .required(),
  pass_confirm: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .valid(Joi.ref("pass"))
    .options({ language: { any: { allowOnly: "must match password" } } })
    .min(8)
    .max(20)
    .required()
});

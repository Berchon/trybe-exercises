const Joi = require('joi');
const CustomError = require('./customError');

const TYPE_STRING = '{{ #label }} shoul\'be a type "string"';
const TYPE_NUMBER = '{{ #label }} shoul\'be a type "number"';
const TYPE_ARRAY = '{{ #label }} shoul\'be a "array"';
const IS_REQUIRED = '{{ #label }} is required';
const NOT_EMPTY = '{{ #label }} is not allowed to be empty';
const VALID_EMAIL = '{{ #label }} must be a valid email';
const CATEGORIES_NOT_EDITED = 'Categories cannot be edited';

const isLoginValid = (object) => {
  const dataSchema = Joi.object({
    email: Joi.string().email().empty().required(),
    password: Joi.string().empty().required(),
  }).messages({
    'string.base': TYPE_STRING,
    'any.required': IS_REQUIRED,
    'any.empty': NOT_EMPTY,
    'string.email': VALID_EMAIL,
  }).validate(object);

  // Sugestão do Thadeu
  if (dataSchema.error) throw new CustomError(400, dataSchema.error.details[0].message);
};

const isPostValid = (object) => {
  const dataSchema = Joi.object({
    title: Joi.string().empty().required(),
    content: Joi.string().empty().required(),
    categoryIds: Joi.array().items(Joi.number()).empty().required(),
  }).messages({
    'string.base': TYPE_STRING,
    'number.base': TYPE_NUMBER,
    'array.base': TYPE_ARRAY,
    'any.required': IS_REQUIRED,
    'any.empty': NOT_EMPTY,
  }).validate(object);

  // Sugestão do Thadeu
  if (dataSchema.error) throw new CustomError(400, dataSchema.error.details[0].message);
};

const isPostUpdateValid = (object) => {
  const dataSchema = Joi.object({
    title: Joi.string().empty().required(),
    content: Joi.string().empty().required(),
    categoryIds: Joi.any().forbidden(),
  }).messages({
    'string.base': TYPE_STRING,
    'any.unknown': CATEGORIES_NOT_EDITED,
    'any.required': IS_REQUIRED,
    'any.empty': NOT_EMPTY,
  }).validate(object);

  // Sugestão do Thadeu
  if (dataSchema.error) throw new CustomError(400, dataSchema.error.details[0].message);
};

module.exports = {
  isLoginValid,
  isPostValid,
  isPostUpdateValid,
};
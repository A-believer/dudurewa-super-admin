// src/schemas/formSchema.ts

import * as yup from "yup"

export const formSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
  })
  .required()

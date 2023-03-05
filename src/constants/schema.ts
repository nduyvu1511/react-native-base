import { REGEX } from './regex'
import * as Yup from 'yup'

export const emailSchema = Yup.string()
  .matches(REGEX.email, 'Vui lòng nhập đúng định dạng email')
  .required('Vui lòng nhập email')

export const phoneSchema = Yup.string()
  .matches(REGEX.phone, 'Vui lòng nhập đúng định dạng số điện thoại')
  .required('Vui lòng nhập số điện thoại')

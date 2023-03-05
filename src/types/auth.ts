export interface PhoneForm {
  phone: string
}

export interface LoginPasswordForm extends PhoneForm {
  password: string
}

export interface OTPFormParams {
  code: string
}

export interface ChangePasswordParams {
  old_password: string
  password: string
  re_password: string
}

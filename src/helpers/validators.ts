export const correctPassword = (value: string) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(value)
}

export const isVietnamesePhoneNumberValid = (num: string) => {
  return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(num)
}

export const checkNumberPhone = (number: string) => {
  ;/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)
}

export const correctEmail = (value: string) => {
  ;/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
}

import _ from 'lodash'

import { CONFIG, REGEX } from '@/constants'

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

export function isValidHttpUrl(string: string) {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}

export const spliceArray = (arr: Array<any>, start: number, end: number) => {
  return [...arr].splice(start, end)
}

export const formatNumber = (money: number, separator = ',') => {
  if (!money) return '0'
  return (money + '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + separator)
}

export const formatNumberDec = (nStr: string, decSeparate: string, groupSeparate: string) => {
  nStr += ''
  let x = nStr.split(decSeparate)
  let x1 = x[0]
  let x2 = x.length > 1 ? '.' + x[1] : ''
  let rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + groupSeparate + '$2')
  }
  return x1 + x2
}

// hàm định dạng tiền việt nam
export function formatMoneyVND(num: number | string, prefix = 'đ'): string {
  if (typeof num == 'number') {
    num = Math.floor(num)
    return `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}${
      prefix ? ` ${prefix}` : ''
    }`
  } else if (typeof num == 'string') {
    return `${num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}${prefix ? ` ${prefix}` : ''}`
  }

  return num
}

export function formatNumberInput(value: string, separator = ',') {
  value += ''
  const list = value.split('.')
  const prefix = list[0].charAt(0) === '-' ? '-' : ''
  let num = prefix ? list[0].slice(1) : list[0]
  let result = ''
  while (num.length > 3) {
    result = `${separator}${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`
}

export const toFirstUpperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const toFirstLowerCase = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

export function isObjectHasValue(obj: any): boolean {
  return obj && _.isObject(obj) && Object.keys(obj).length > 0
}

export function isArrayHasValue(array: any): boolean {
  return array && _.isArray(array) && array.length > 0
}

export function convertViToEn(str: string, toUpperCase = false) {
  if (!str) return ''

  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // Â, Ê, Ă, Ơ, Ư

  return toUpperCase ? str.toUpperCase() : str
}

export const calculateElapsedTime = (timeCreated: string) => {
  const created = new Date(timeCreated).getTime()
  let periods: any = {
    year: 365 * 30 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  }
  let diff = Date.now() - created

  for (const key in periods) {
    if (diff >= periods[key]) {
      let result = Math.floor(diff / periods[key])
      return `${result} ${result === 1 ? key : key + 's'} ago`
    }
  }

  return 'Just now'
}

export const toImageUrl = (url: string) => {
  if (REGEX.base64.test(url)) {
    return `data:image/jpeg;base64,${url}`
  }

  if (url?.includes('https://') || url?.includes('http://')) return url

  return `${CONFIG.apiUrl}${url}`
}

export const removeBase64Reader = (str: string) => str.replace(REGEX.base64_reader, '')

import { IdAndName } from './common'

export type GenderType = 'male' | 'female' | 'no_info'
export type AccountType = 'th' | 'nvkd' | 'npp' | 'gsbh' | 'asm'
export type CustomerType = 'internal' | 'collaborators' | string

export interface CreateAddress {
  street: string
  ward_id: number
  district_id: number
  state_id: number
}

export interface StateId {
  state_id: number
}

export interface DistrictId {
  district_id: number
}

export type AddressRes = {
  id: number
  name: string
  phone: string
  street: string
  ward_id: string
  district_id: string
  state_id: string
  country_id: string
  full_adress: string
  ward_name_id: number
  district_name_id: number
  state_name_id: number
  country_name_id: number
}

export interface PartnerIdAndCompanyId {
  partner_id: number
  company_id: number
}

export interface Login {
  login: string
  password: string
}

export interface LoginRes {
  uid: number
  user_context: {
    lang: string
    tz: string
    uid: string
  }
  company_id: number
  company_ids: string[]
  partner_id: number
  access_token: string
  company_name: string
  country: string
  contact_address: string
  session_info: any[]
}

export interface UserDetailRes {
  name: string
  account_type: AccountType
  customer_type: CustomerType
  email: string
  image: string
  detail_shipper: {
    partner_id: number
    name: string
    email: string
    phone: string
    street: string
    birthday: string
    vat: string
    website: string
    mobile: string
    sex: GenderType
    description: string
    note: any
    im_status: 'offline' | 'online'
    image_url: string
    barcode: string
    notification_counts: number
    total: number
    customer_name: string
    longitude: string
    latitude: string
    address: AddressRes
    partner_credit: number
    partner_debit: number
    category: IdAndName
  }
}

export interface UpdateUserInfo {
  birth_day?: string
  name?: string
  sex?: GenderType | string
  email?: string
  phone?: string
  image?: string
}

export interface UpdateUserAddress {
  street: string
  ward_id: number
  district_id: number
  state_id: number
  country_id: number
}

export interface LoyaltyByRule {
  id: number
  point: number
  money: number
  label: string
  value: number
}

export type AddressItemRes = IdAndName

export interface UserInfoRes extends UpdateUserInfo {
  address?: string | undefined
}

export type CreateAddressForm = {
  street: string
  ward_id: IdAndName
  district_id: IdAndName
  state_id: IdAndName
}

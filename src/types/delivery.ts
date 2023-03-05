import { IdAndName } from './common'
import { QueryList } from './http'
import { AddressRes } from './user'

export interface CustomerId {
  customer_id: number
  customer_name: string
}

export interface ShipperId {
  customer_id: number
  customer_name: string
}

export interface DeliveryRoute {
  delivery_route_id: number
  delivery_route_name: string
}

export interface Customer {
  id: number
  name: string
  image: string
  phone: string
  address: AddressRes
  longitude: number
  latitude: number
  plan_date: string
}

export interface SaleOrderLine {
  id: number
  name: string
  product: IdAndName
  image: string
  product_uom: IdAndName
  product_uom_qty: number
  quantity_returned: number
  quantity_done: number
  price_unit: number
  price_subtotal: number
  price: number
  quantity_returned_uom: number
  product_uom_return: IdAndName
  product_uom_categ: IdAndName[]
}

export interface RouteRes {
  id: number
  image: string
  name: string
  shipper: string
  total_order: number
  total_product: number
  total_customer: number
  total_amount: number
  total_paid: number
  customer_paid: number
  plan_date: string
}

export type OrderState =
  | 'draft'
  | 'assign'
  | 'waiting'
  | 'ready'
  | 'delivery'
  | 'paid'
  | 'done'
  | 'unpaid'
  | 'pending'
  | 'cancel'
  | 'import'

export interface OrderLineProductRes {
  id: number
  name: string
  image: string
  product: IdAndName
  product_uom: IdAndName & { inv: number }
  product_uom_qty: number
  quantity_returned: number
  quantity_done: number
  price_unit: number
  price_subtotal: number
  price: number
  quantity_returned_uom: number
  product_uom_return: IdAndName
  product_uom_categ: (IdAndName & { inv: number })[]
}

export interface UpdateCustomerOrderQtyReturned extends OrderLineProductRes {
  qty_returned: number
  uom_id: number
}

export interface OrderRes {
  id: number
  order_name: string
  order_code: string
  is_edit: boolean
  state: OrderState
  customer_name: string
  user_name: string
  date_order: string
  image_url?: string[]
  plan_date: string
  payment_amount: number
  customer_paid: number
  amount_returned: number
  amount_total: number
  quantity_total: number
  returned_quantity: number
  start_processing: false
  end_processing: string
  total_paid: number
}

export interface GetRouteDetailRes {
  total_order: number
  total_product: number
  total_amount: number
  customer_paid: number
  total_return: number
  customers: CustomerRouteRes[]
}

export interface CustomerRouteRes {
  id: number
  delivery_route_id: number
  name: string
  image: string
  phone: string
  address: AddressRes
  total_order: number
  total_product: number
  total_amount: number
  total_paid: number
  customer_paid: number
  plan_date: string
  longitude: string
  latitude: string
  start_processing: string
  end_processing: string
}

export interface CustomerRouteInfo {
  id: number
  name: string
  image: string
  phone: string
  address: AddressRes
  plan_date: string
  total_order: number
  total_product: number
  total_amount: number
  total_paid: number
  customer_paid: number
  longitude: string
  latitude: string
  start_processing: string | Date
  end_processing: string
}

export interface SearchDeliveryByCustomerRes extends CustomerRouteInfo {
  delivery_route_id: number
}

export interface DetailCustomerRouteRes extends CustomerRouteInfo {
  sale_orders: OrderRes[]
}

export interface DeliveryRouteId {
  delivery_route_id: number
}

export interface DeliveryRouteIdAndCustomerId {
  delivery_route_id: number
  customer_id: number
}

export type CancelAllCustomerRouteOrder = DeliveryRouteIdAndCustomerId

export interface ConfirmDoneCustomerRouteOrder extends DeliveryRouteIdAndCustomerId {}

export interface GetCustomerRouteDetail
  extends QueryList,
    DeliveryRouteIdAndCustomerId,
    DateFilter {}

// export interface GetCustomerOrderDetail extends DeliveryRouteIdAndCustomerId {
//   export_stock_order_id: number
// }
export interface GetCustomerOrderDetail {
  export_stock_order_id: number
}

export interface GetCustomerOrderDetailRes extends OrderRes {
  order_code: string
  sale_order_line: OrderLineProductRes[]
}

export type DateTypeFilter =
  | 'today'
  | 'yesterday'
  | 'this_week'
  | 'last_week'
  | 'this_month'
  | 'last_month'
  | 'this_quarter'
  | 'last_quarter'
  | 'this_year'
  | 'last_year'

export interface DateFilter {
  date_starting?: string
  date_ending?: string
  date_type?: DateTypeFilter
}

export interface GetRouteList extends QueryList, DateFilter {
  keyword?: string
}

export interface GetRouteDetail extends QueryList, DateFilter {
  delivery_route_id: number
}

export interface ChangeCustomerRouteOrderToStart extends ConfirmDoneCustomerRouteOrder {}

export interface ChangeCustomerRouteOrderToStartRes {
  message: string
  export_stock_orders: string[]
}

export interface OrderIdAndOrderLineId {
  export_stock_order_id: number
  export_stock_order_line_id: number
}

export interface CancelCustomerRouteOrder {
  export_stock_order_id: number
}

export interface UpdateCustomerRouteOrder extends OrderIdAndOrderLineId {
  qty_returned: number
  uom_id: number
}

export interface UpdateCustomerRouteOrderRes {
  message: string
  export_stock_order_line_id: number
}

export interface UpdateOrderCustomerPaid {
  export_stock_order_id: number
  customer_paid: number
}

export interface UpdateOrderCustomerPaidRes {
  message: string
  export_stock_order_id: number
  export_stock_order_name: string
}

export interface ConfirmDoneCustomerRouteOrderRes {
  message: string
  export_stock_orders: string[]
}

export interface DeliveryRouteCode extends QueryList {
  delivery_route_code: string
}

export interface DeliveryDraftRes {
  id: number
  order_name: string
  order_code: string
  delivery_route: DeliveryRoute
  state: OrderState
  is_edit: boolean
  customer: CustomerId
  shipper: ShipperId
  date_order: string
  plan_date: string
}

export interface DeliveryDraftDetailRes {
  id: number
  order_name: string
  order_code: string
  delivery_route: DeliveryRoute
  state: OrderState
  is_edit: boolean
  customer: Customer
  shipper: ShipperId
  quantity_total: number
  returned_quantity: number
  payment_amount: number
  customer_paid: number
  amount_returned: number
  amount_total: number
  user_name: string
  date_order: string
  start_processing: string
  end_processing: string
  plan_date: string
  sale_order_line: SaleOrderLine[]
}

export interface SearchDeliveryByCustomer {
  customer_id?: number
  keyword?: string
}

export interface AddImageForDeliveryOrder {
  export_stock_order_ids: number[]
  images: string //base64
}

export interface TraccarTrackingLocation {
  id: string
  lat: number
  lon: number
  timestamp?: number
  speed?: number
  bearing?: number
  altitude?: number
  accuracy?: number
  batt?: number
}

export interface CreateTraccarDevice {
  id: number
  name: string
  uniqueId: string
  status?: string
  disabled?: true
  lastUpdate?: Date
  positionId?: number
  groupId?: number
  phone?: string
  model?: string
  contact?: string
  category?: string
  geofenceIds?: [number]
  attributes?: {}
}

export interface ChangeUnit {
  uom_id: number
}

export interface ChangeUnitRes {
  id: number
  name: string
  uom_type: 'reference' | 'bigger' | 'smaller'
  inv: number
}

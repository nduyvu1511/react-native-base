import { CONFIG } from '@/constants'
import {
  AddImageForDeliveryOrder,
  CancelAllCustomerRouteOrder,
  CancelCustomerRouteOrder,
  ChangeCustomerRouteOrderToStart,
  ChangeCustomerRouteOrderToStartRes,
  ChangeUnit,
  ChangeUnitRes,
  ConfirmDoneCustomerRouteOrder,
  CreateTraccarDevice,
  DeliveryDraftDetailRes,
  DeliveryDraftRes,
  DeliveryRouteCode,
  DeliveryRouteId,
  DetailCustomerRouteRes,
  GetCustomerOrderDetail,
  GetCustomerOrderDetailRes,
  GetCustomerRouteDetail,
  GetRouteDetail,
  GetRouteDetailRes,
  GetRouteList,
  HTTPResponse,
  RouteRes,
  SearchDeliveryByCustomer,
  SearchDeliveryByCustomerRes,
  TraccarTrackingLocation,
  UpdateCustomerRouteOrder,
  UpdateCustomerRouteOrderRes,
  UpdateOrderCustomerPaid,
  UpdateOrderCustomerPaidRes,
} from '@/types'
import axios from 'axios'
import { axiosClient } from './axiosInstance'

const deliveryAPI = {
  getRouteList: (params: GetRouteList): Promise<HTTPResponse<RouteRes[]>> => {
    return axiosClient.get('/api/v2.0/get_list_delivery', { params })
  },

  getRouteDetail: (params: GetRouteDetail): Promise<HTTPResponse<GetRouteDetailRes>> => {
    return axiosClient.get('/api/v2.0/get_detail_delivery', { params })
  },

  getCustomerRouteDetail: (
    params: GetCustomerRouteDetail
  ): Promise<HTTPResponse<DetailCustomerRouteRes>> => {
    return axiosClient.get('/api/v2.0/get_detail_delivery_sale', { params })
  },

  getCustomerOrderDetail: (
    params: GetCustomerOrderDetail
  ): Promise<HTTPResponse<GetCustomerOrderDetailRes>> => {
    return axiosClient.get('/api/v2.0/get_detail_delivery_sale_line', { params })
  },

  getCustomerOrderDetailHistory: (
    params: GetCustomerOrderDetail
  ): Promise<HTTPResponse<GetCustomerOrderDetailRes>> => {
    return axiosClient.get('/api/v2.0/get_history_detail_delivery_sale_line', { params })
  },

  getRouteHistoryList: (params: GetRouteList): Promise<HTTPResponse<RouteRes[]>> => {
    return axiosClient.get('/api/v2.0/get_history_delivery', { params })
  },

  getRouteDetailHistory: (params: GetRouteDetail): Promise<HTTPResponse<GetRouteDetailRes>> => {
    return axiosClient.get('/api/v2.0/get_history_detail_delivery', { params })
  },

  getCustomerRouteDetailHistory: (
    params: GetCustomerRouteDetail
  ): Promise<HTTPResponse<DetailCustomerRouteRes>> => {
    return axiosClient.get('/api/v2.0/get_history_detail_delivery_sale', { params })
  },

  changeCustomerRouteOrderToStart: (
    params: ChangeCustomerRouteOrderToStart
  ): Promise<HTTPResponse<ChangeCustomerRouteOrderToStartRes>> => {
    return axiosClient.post('/api/v2.0/post_start_delivery', params)
  },

  updateCustomerRouteOrder: (
    params: UpdateCustomerRouteOrder
  ): Promise<HTTPResponse<UpdateCustomerRouteOrderRes>> => {
    return axiosClient.post('/api/v2.0/post_update_delivery', params)
  },

  updateOrderCustomerPaid: (
    params: UpdateOrderCustomerPaid
  ): Promise<HTTPResponse<UpdateOrderCustomerPaidRes>> => {
    return axiosClient.post('/api/v2.0/post_update_customer_paid', params)
  },

  confirmDoneCustomerRouteOrder: (
    params: ConfirmDoneCustomerRouteOrder
  ): Promise<HTTPResponse<UpdateOrderCustomerPaidRes>> => {
    return axiosClient.post('/api/v2.0/post_validate_delivery', params)
  },

  cancelCustomerRouteOrder: (
    params: CancelCustomerRouteOrder
  ): Promise<HTTPResponse<UpdateOrderCustomerPaidRes>> => {
    return axiosClient.post('/api/v2.0/post_unlink_delivery', params)
  },

  cancelAllCustomerRouteOrder: (
    params: CancelAllCustomerRouteOrder
  ): Promise<HTTPResponse<UpdateOrderCustomerPaidRes>> => {
    return axiosClient.post('/api/v2.0/post_unlink_all_delivery', params)
  },

  searchDeliveryDraft: (params: DeliveryRouteCode): Promise<HTTPResponse<DeliveryDraftRes[]>> => {
    return axiosClient.get('/api/v2.0/search_delivery_draft', { params })
  },

  getDetailDeliveryDraft: (
    params: DeliveryRouteId
  ): Promise<HTTPResponse<DeliveryDraftDetailRes>> => {
    return axiosClient.get('/api/v2.0/detail_delivery_draft', { params })
  },

  searchDeliveryDraftReceived: (
    params: DeliveryRouteCode
  ): Promise<HTTPResponse<DeliveryDraftRes[]>> => {
    return axiosClient.get('/api/v2.0/search_delivery_draft_received', { params })
  },

  searchDeliveryByCustomer: (
    params: SearchDeliveryByCustomer
  ): Promise<HTTPResponse<SearchDeliveryByCustomerRes[]>> => {
    return axiosClient.get('/api/v2.0/search_delivery_by_customer', { params })
  },

  addImageForDeliveryOrder: (params: AddImageForDeliveryOrder): Promise<HTTPResponse<any>> => {
    return axiosClient.post('/api/v2.0/post_image_delivery', params)
  },

  confirmDeliveryDraftReceived: (params: {
    export_stock_order_ids: number[]
  }): Promise<HTTPResponse<any>> => {
    return axiosClient.post('/api/v2.0/delivery_draft_received_approve', params)
  },

  searchDeliveryReceived: (
    params: DeliveryRouteCode
  ): Promise<HTTPResponse<DeliveryDraftRes[]>> => {
    return axiosClient.get('/api/v2.0/search_delivery_received', { params })
  },

  traccarTrackingLocation: (params: TraccarTrackingLocation): Promise<any> => {
    return axios.post(
      CONFIG.traccarUrl,
      {},
      {
        params: {
          bearing: 0.0,
          altitude: 0.0,
          accuracy: 0.0,
          batt: 0.0,
          speed: 0.0,
          timestamp: Date.now(),
          ...params,
        } as TraccarTrackingLocation,
      }
    )
  },

  createTraccarDevice: (params: CreateTraccarDevice): Promise<any> => {
    return axios.post(CONFIG.traccarUrl, params)
  },

  changeUnit: (params: ChangeUnit): Promise<HTTPResponse<ChangeUnitRes[]>> => {
    return axiosClient.get('/api/v2.0/search_delivery_received', { params })
  },
}

export { deliveryAPI }

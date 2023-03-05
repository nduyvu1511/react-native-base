export const ORDER_STATE_NAME = {
  draft: 'Chưa chỉ định',
  assign: 'Đã chỉ định',
  waiting: 'Đã chuẩn bị',
  ready: 'Đã sẵn sàng',
  delivery: 'Đang vận chuyển',
  paid: 'Đã thanh toán',
  done: 'Hoàn thành',
  unpaid: 'Ghi nợ',
  pending: 'Thanh toán sau',
  cancel: 'Đã hủy',
  import: 'Đã nhập',
}

export const DELIVERY_STATUS_NAME = {
  all: 'Tất cả',
  no_name: 'Chưa giao hàng',
  partially_delivered: 'Giao một phần',
  fully_delivered: 'Đã giao hết',
}

export const RETURN_DELIVERY_STATUS_NAME = {
  all: 'Tất cả',
  no_name: 'Không',
  return_partially_delivered: 'Trả hàng một phần',
  return_fully_delivered: 'Trả hàng toàn bộ',
}

export const PAID_STATUS_NAME = {
  all: 'Tất cả',
  no_paid: 'Chưa thanh toán',
  partially_paid: 'Thanh toán một phần',
  fully_paid: 'Thanh toán toàn bộ',
}

export const RETURN_PAID_STATUS_NAME = {
  all: 'Tất cả',
  no_paid: 'Không',
  return_fully_paid: 'Hoàn tiền toàn phần',
  return_partially_paid: 'Hoàn tiền một phần',
}

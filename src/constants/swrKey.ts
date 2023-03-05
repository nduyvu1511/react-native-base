export const SWR_KEY = {
  search_delivery_draft: 'search_delivery_draft',
  search_delivery_draft_received: 'search_delivery_draft_received',
  search_delivery_received: 'search_delivery_received',
  customer_route_detail_history: (cId: number) => `customer_route_detail_history_${cId}`,
  customer_route_detail: (cId: number) => `customer_route_detail_${cId}`,
  route_detail: (id: number) => `route_detail_${id}`,
  route_detail_history: (id: number) => `route_detail_history_${id}`,
}

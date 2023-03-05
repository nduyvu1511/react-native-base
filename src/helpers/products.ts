import {
  GetProductDetail,
  ProductAttributeWithParentId,
  ProductDetailRes,
  ProductOrder,
  ProductRes,
  ToGetProductDetailParams,
  ToProductOrder,
} from '@/types'
import { toFirstUpperCase } from './functions'

export const toProductOrder = (params: ToProductOrder): ProductOrder => {
  let id = 0
  let id_product_att = 0

  if ((params as ProductRes)?.id_product_att) {
    id = (params as ProductRes).id_product_att
    id_product_att = params.id
  } else {
    id = params.id
    id_product_att = (params as ProductDetailRes)?.product_tmpl_id
  }

  const categ_name = (<ProductRes>params)?.categ_name || (<ProductDetailRes>params)?.category?.name

  return {
    id,
    id_product_att,
    image_url: params.image_url,
    type: params?.type || 'product',
    product_brand_id: '',
    categ_name,
    uom: params.uom,
    company_id: params?.company_id,
    uom_categ: params.uom_categ,
    company_name: params?.company_name,
    default_code: params?.default_code,
    standard_price: params?.standard_price || 0,
    name: params?.name,
    barcode: params?.barcode,
    qty: params?.qty || 1,
    product_available: params?.product_available || 0,
    price: params.price,
    price_orgin: params?.price, // Caution, must ask again
    price_discount: params?.price, // Same
    price_list: [],
    seller_price: params?.seller_price,
    price_table: (<ProductRes>params)?.price_table || [],
    variants: params?.variants || [],
    attributes: params?.attributes || [],
    product_list: params?.product_list || [],
    is_product_order: true,
  }
}

export const toGetProductDetailParams = (params: ToGetProductDetailParams): GetProductDetail => {
  if (params.type === 'combo')
    return {
      type: 'combo',
      product_id: params.id,
    }

  const product_id = (params as ProductOrder)?.is_product_order
    ? (params as ProductOrder).id
    : params.id_product_att

  const id = (params as ProductOrder)?.is_product_order
    ? (params as ProductOrder).id_product_att
    : params.id

  return {
    type: 'product',
    product_id,
    partner_id: params?.partner_id || 0,
    uom_id: params?.uom?.id,
    list_products: [
      {
        id,
        lst_attributes_id: params.variants.map((item) => item.id),
      },
    ],
  }
}

export const renderProductVariantsString = (data: ProductAttributeWithParentId[]): string => {
  let val = ''

  data.forEach((item) => {
    val += `${toFirstUpperCase(item.parent_name)} ${item.name}, `
  })

  return val.slice(0, val.length - 2)
}

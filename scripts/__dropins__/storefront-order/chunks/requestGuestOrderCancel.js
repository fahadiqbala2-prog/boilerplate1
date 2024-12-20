import{P as T,a as d,G as i,O as A,B as D,b as c,A as u}from"./ReturnsFragment.graphql.js";import{f as E,h as s}from"./fetch-graphql.js";import{a as R}from"./initialize.js";import{G}from"./GurestOrderFragment.graphql.js";const m=`
  mutation CANCEL_ORDER_MUTATION($orderId: ID!, $reason: String!) {
    cancelOrder(input: { order_id: $orderId, reason: $reason }) {
      error
      order {
        email
        available_actions
        status
        number
        id
        order_date
        carrier
        shipping_method
        is_virtual
        applied_coupons {
          code
        }
        shipments {
          id
          number
          tracking {
            title
            number
            carrier
          }
          comments {
            message
            timestamp
          }
          items {
            id
            product_sku
            product_name
            order_item {
              ...ORDER_ITEM_DETAILS_FRAGMENT
              ... on GiftCardOrderItem {
                ...GIFT_CARD_DETAILS_FRAGMENT
                product {
                  ...PRODUCT_DETAILS_FRAGMENT
                }
              }
            }
          }
        }
        payment_methods {
          name
          type
        }
        shipping_address {
          ...ADDRESS_FRAGMENT
        }
        billing_address {
          ...ADDRESS_FRAGMENT
        }
        items {
          ...ORDER_ITEM_DETAILS_FRAGMENT
          ... on BundleOrderItem {
            ...BUNDLE_ORDER_ITEM_DETAILS_FRAGMENT
          }
          ... on GiftCardOrderItem {
            ...GIFT_CARD_DETAILS_FRAGMENT
            product {
              ...PRODUCT_DETAILS_FRAGMENT
            }
          }
          ... on DownloadableOrderItem {
            product_name
            downloadable_links {
              sort_order
              title
            }
          }
        }
        total {
          ...ORDER_SUMMARY_FRAGMENT
        }
      }
    }
  }
  ${T}
  ${d}
  ${i}
  ${A}
  ${D}
  ${c}
  ${u}
`,S=async(r,e,_,t)=>{if(!r)throw new Error("No order ID found");if(!e)throw new Error("No reason found");return E(m,{variables:{orderId:r,reason:e}}).then(({errors:o,data:n})=>{if(o)return s(o);if(n.cancelOrder.error!=null){t();return}const a=R(n.cancelOrder.order);_(a)}).catch(()=>t())},O=`
  mutation REQUEST_GUEST_ORDER_CANCEL_MUTATION(
    $token: String!
    $reason: String!
  ) {
    requestGuestOrderCancel(input: { token: $token, reason: $reason }) {
      error
      order {
        ...GUEST_ORDER_FRAGMENT
      }
    }
  }
  ${G}
`,p=async(r,e,_,t)=>{if(!r)throw new Error("No order token found");if(!e)throw new Error("No reason found");return E(O,{variables:{token:r,reason:e}}).then(({errors:o,data:n})=>{if(o)return s(o);n.requestGuestOrderCancel.error!=null&&t();const a=R(n.requestGuestOrderCancel.order);_(a)}).catch(()=>t())};export{S as c,p as r};

export type menuData = {
    id:string,
    createdAt:string,
    title:string,
    img?:string,
    color:string,
    description?:string,
    slug:string
  }[]
  
export type typeFeaturedProducts = {
  id:string,
  title:string,
  desc?:string,
  img?:string,
  price:number,
  options?: {title:string, additionalPrice:number} []
}

export type typeCategoryProductsData = {
  id:string,
  img:string,
  title:string,
  price:number
}

export type typeOrderData = {
  id:string,
  userEmail:string,
  price:number,
  products: typCartItem[],
  status:string,
  createdAt: Date,
  intent_id?:string
}

export type typCartItem = {
  id:string,
  title:string,
  img?:string,
  price:number,
  optionTitle?:string,
  quantity:number
}
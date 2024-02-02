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
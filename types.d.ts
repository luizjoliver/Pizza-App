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

export type typeProductsData = {
  id:string,
  title:string,
  description?:string,
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

export type typeCartItem = {
  id:string,
  title:string,
  img?:string,
  price:number,
  optionTitle?:string,
  quantity:number
}

export type actionTypes = {
  addToCart : (item:typeCartItem) => void;
  removeFromCart : (item:typeCartItem) => void;
}


export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart:(item:CartItemType)=> void;
  removeFromCart:(item:CartItemType)=> void;
}
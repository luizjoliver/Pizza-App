
type paramsProductPage ={
  params:{
    id:string
  }
}


export default function ProductPage({params:{id}} : paramsProductPage) {
  return (
    <div>ProductPage{id}</div>
  )
}

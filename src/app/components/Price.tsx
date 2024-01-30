

type PriceProps = {
    price:number,
    id:number,
    options?:{title:string,additionalPrice:number}[]
}

export default function Price({id,price,options}:PriceProps) {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{price.toFixed(2)}</h2>
        
        <div className="flex gap-4">

            {options?.map(option => (
                <button key={option.title} className="p-2 ring-1 ring-red-400 rounded-md">{option.title}</button>
            ))}

        </div>

        <div className="flex justify-between items-center">

            <div  className="flex justify-between w-full p-3 ring-1 ring-red-500">
                <span>Quality</span>
                <div className="flex gap-4 items-center">
                    <button>{"<"}</button>
                    <span>1</span>
                    <button>{">"}</button>
                </div>
            </div>
            <button className="uppercase p-3 w-56 bg-red-500 text-white ring-1 ring-red-500">Add to Cart</button>
        </div>

    </div>
  )
}

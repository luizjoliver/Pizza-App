"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

type Inputs = {
    title: string;
    description: string;
    price: number;
    catSlug: string;
  };

  type Option = {
    title: string;
    additionalPrice: number;
  };


export default function AddProduct() {

    const {data:session,status} = useSession()

    const [inputs, setInputs] = useState<Inputs>({
        title: "",
        description: "",
        price: 0,
        catSlug: "",
      });

      const [option, setOption] = useState<Option>({
        title: "",
        additionalPrice: 0,
      });

      const [options,setOptions] = useState<Option[]>([])
      const [file,setFile] = useState<File>()

    const router = useRouter()

      const handleChangeImg = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const target = e.target as HTMLInputElement
        const item = (target.files as FileList)[0]
        setFile(item)
      }

      async function upload (){
    
        const data = new FormData()
        data.append("file",file!)
        data.append("upload_preset","restaurant")
        const res = await fetch("https://api.cloudinary.com/v1_1/dv4r45fig/image",{
            method:"POST",
            headers:{
                "Content-Type":"multipart/form-datga"
            },
            body:file
        })

        const resData = await res.json()
        return resData.url
      }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          const url = await upload();
          const res = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({
              img: url,
              ...inputs,
              options,
            }),
          });
    
          const data = await res.json();
    
          router.push(`/product/${data.id}`);
        } catch (err) {
          console.log(err);
        }
      };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };

      
      const handleOption = (
        e: React.ChangeEvent<HTMLInputElement >
      ) => {
        setOption((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };

    if(status === "loading") return <p>loading....</p>


    if(status === "unauthenticated" || !session?.user.isAdmin) {
        router.push("/")
    }

  return (
    <div>
        <form className='shadow-lg flex flex-wrap gap-4 p-8' onSubmit={handleSubmit}>
            <h1>Add new Product</h1>
            <div className='w-full flex flex-col  gap-2'>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} className="ring-1 ring-red-200 p-2 rounded-sm" type="text"  name='title'/>
            </div>
            <div className='w-full flex flex-col  gap-2'>
                <label htmlFor="title">Image</label>
                <input onChange={handleChangeImg} className="ring-1 ring-red-200 p-2 rounded-sm" type="file"  />
            </div>
            <div className='w-full flex flex-col  gap-2'>
                <label htmlFor="title">Description </label>
                <textarea onChange={handleChange} className="ring-1 ring-red-200 p-2 rounded-sm"  name='description'/>
            </div>
            <div className='w-full flex flex-col  gap-2'>
                <label htmlFor="price">Price</label>
                <input onChange={handleChange} className="ring-1 ring-red-200 p-2 rounded-sm" type="number"  name='price'/>
            </div>
            <div className='w-full flex flex-col  gap-2'>
                <label htmlFor="category">Category</label>
                <input onChange={handleChange} className="ring-1 ring-red-200 p-2 rounded-sm" type="text"  name='catSlug'/>
            </div>
            <div className='w-full flex flex-col  gap-2'>
                <label htmlFor="category">Options</label>
                <div>
                    <input onChange={handleOption} className="ring-1 ring-red-200 p-2 rounded-sm" type="text" placeholder='Title' name='title' />
                    <input onChange={handleOption} className="ring-1 ring-red-200 p-2 rounded-sm" type="number" placeholder='Additional Price' name='additionalPrice' />
                </div>
                <div className='w-52 bg-red-500 text-white p-2 cursor-pointer'
                onClick={() => setOptions((prev) => [...prev,option])}>Add Option</div>
            </div>
            <div className='w-full flex flex-col  gap-2'>
                {options.map((opt) =>(
                    <div className='ring-1 p-2 ring-red-500 rounded-md cursor-pointer'
                     key={opt.title}
                     onClick={() => setOptions(options.filter(item => item.title !== opt.title))}>
                        <span>{opt.title}</span>
                        <span>${opt.additionalPrice}</span>
                    </div>
                ))}
            </div>
            <button type='submit' className='p-2 w-full bg-red-500 text-white'
            > Submit </button>
        </form>
    </div>
  )
}

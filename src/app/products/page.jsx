import dbConnect from '@/lib/mongo'
import React from 'react'

export default async function ProductsPage() {
    const  serviceCollection= dbConnect("products");
    const data =await serviceCollection.find({}).toArray();
    console.log("helllo bhai",data)
  return (
    <div>i am products</div>
  )
}

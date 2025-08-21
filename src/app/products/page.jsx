import dbConnect from '@/lib/mongo'
import Link from 'next/link';
import React from 'react'

export default async function ProductsPage() {
    const  serviceCollection= dbConnect("products");
    const products =await serviceCollection.find({}).toArray();
    
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <div key={index} className="card bg-base-200 w-96 shadow-sm">
          <figure>
            <img src={product.image} alt={product.name} />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-semibold">Price: ${product.price}</p>
            <div className="card-actions justify-end">
              <Link href={`/products/${product._id}`} className="btn btn-primary w-full ">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

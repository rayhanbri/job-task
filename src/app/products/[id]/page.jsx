import dbConnect from "@/lib/mongo";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function ProductDetails({ params }) {
    const productsCollection = await dbConnect("products");
    const product = await productsCollection.findOne({
        _id: new ObjectId(params.id),
    });

    if (!product) return <p>Product not found</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-base-100 shadow-md">
                <figure>
                    <img src={product.image} alt={product.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-gray-900 font-semibold">Price: ${product.price}</p>
                    <p className="mt-2">{product.details}</p>
                </div>
                <div className="card-actions justify-end p-6">
                    <Link href={`/products`} className="btn btn-primary w-full ">Go to Product</Link>
                </div>
            </div>
        </div>
    );
}

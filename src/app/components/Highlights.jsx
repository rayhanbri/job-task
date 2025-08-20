import React from "react";


const highlights = [
  {
    id: 1,
    title: "Latest Smartphones",
    description: "Check out the newest smartphones in the market.",
    image: "/phone.jpg",
  },
  {
    id: 2,
    title: "Smart Home Devices",
    description: "Make your home smarter with our gadgets.",
    image: "/home-device.jpg",
  },
  {
    id: 3,
    title: "Gaming Gear",
    description: "Top-quality gaming accessories for all gamers.",
    image: "/gear.jpg",
  },
  {
    id: 4,
    title: "Audio & Headphones",
    description: "Experience high-quality sound with our products.",
    image: "headphones.jpg",
  },
];

export default function Highlights() {
  return (
    <section className="bg py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div key={item.id} className="card bg-gray-300  shadow-sm w-full">
              <figure>
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

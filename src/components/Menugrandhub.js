"use client";
import Image from "next/image";

export default function Menugrandhub() {
  const drinks = [
    { name: "Espresso", price: "$3.50 / $4.00", desc: "Rich, bold single or doppio", image: "/images/espresso.jpg" },
    { name: "Cappuccino", price: "$4.50", desc: "Equal parts espresso, steamed milk & foam", image: "/images/capuchino.jpg" },
    { name: "Macchiato", price: "$5.00", desc: "Velvety microfoam, stronger than a latte", image: "/images/macchiato.jpg" },
    { name: "Hot Chocolate", price: "$5.00 / $5.50", desc: "Smooth espresso with steamed milk", image: "/images/hotchocolate.jpg" },
    { name: "Americano", price: "$4.00", desc: "Espresso with hot water", image: "/images/espresso.jpg" },
    { name: "Mocha", price: "$5.50", desc: "Espresso, chocolate, steamed milk", image: "/images/espresso.jpg" },
    { name: "Cold Brew", price: "$5.00", desc: "24-hour smooth cold brew", image: "/images/espresso.jpg" },
    { name: "Matcha Latte", price: "$5.50", desc: "Ceremonial grade matcha", image: "/images/espresso.jpg" },
  ];

  const pastries = [
    { name: "Butter Croissant", price: "$4.00" },
    { name: "Almond Croissant", price: "$4.50" },
    { name: "Pain au Chocolat", price: "$4.50" },
    { name: "Blueberry Muffin", price: "$3.80" },
    { name: "Banana Bread (slice)", price: "$4.00" },
  ];

  return (
    <section className="py-24 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600">Handcrafted with love, every single time</p>
        </div>

        {/* Espresso Drinks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {drinks.map((drink) => (
            <div key={drink.name} className="bg-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-48">
  <Image
    src={drink.image}
    alt={drink.name}
    fill
    className="object-cover"
  />
</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900">{drink.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{drink.desc}</p>
                <div className="mt-4 text-2xl font-bold text-amber-800">{drink.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pastries */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-8">Fresh Pastries</h3>
          <div className="bg-amber-50 rounded-2xl p-8 shadow-inner">
            {pastries.map((item) => (
              <div key={item.name} className="flex justify-between items-center py-4 border-b border-amber-200 last:border-0">
                <span className="text-lg font-medium text-gray-800">{item.name}</span>
                <span className="text-xl font-bold text-amber-800">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
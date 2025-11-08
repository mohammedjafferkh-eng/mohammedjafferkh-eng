"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    { id: 1, name: "Grilled Chicken Sandwich", category: "sandwiches", price: "$8.99", description: "Juicy grilled chicken with fresh veggies" },
    { id: 2, name: "Veggie Delight Sandwich", category: "sandwiches", price: "$7.99", description: "Fresh vegetables with special sauce" },
    { id: 3, name: "Margherita Pizza", category: "pizzas", price: "$12.99", description: "Classic tomato, mozzarella, and basil" },
    { id: 4, name: "Pepperoni Pizza", category: "pizzas", price: "$14.99", description: "Loaded with pepperoni and cheese" },
    { id: 5, name: "Crispy French Fries", category: "fries", price: "$4.99", description: "Golden crispy fries with seasoning" },
    { id: 6, name: "Loaded Cheese Fries", category: "fries", price: "$6.99", description: "Fries topped with melted cheese" },
    { id: 7, name: "Fresh Orange Juice", category: "juices", price: "$5.99", description: "Freshly squeezed orange juice" },
    { id: 8, name: "Mixed Berry Smoothie", category: "juices", price: "$6.99", description: "Blend of fresh berries" },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-emerald-600">Just Juice</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-emerald-600 transition">Menu</a>
              <a href="#gallery" className="text-gray-700 hover:text-emerald-600 transition">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/just-juice-interior.jpg"
          alt="Just Juice Café Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Just Juice
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Where Flavor Meets Freshness
          </p>
          <a 
            href="#menu" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
          >
            Explore Menu
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Just Juice</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of taste and quality at Just Juice. We serve delicious sandwiches, 
            crispy fries, mouth-watering pizzas, and refreshing juices made with the freshest ingredients. 
            Our cozy, modern café is the perfect spot to enjoy great food with friends and family.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Menu</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Discover our delicious offerings</p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "sandwiches", "pizzas", "fries", "juices"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-6xl">
                    {item.category === "sandwiches" && "🥪"}
                    {item.category === "pizzas" && "🍕"}
                    {item.category === "fries" && "🍟"}
                    {item.category === "juices" && "🥤"}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-600">{item.price}</span>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">A glimpse into our café experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/just-juice-interior.jpg"
                alt="Café Interior"
                fill
                className="object-cover hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <span className="text-8xl">🍔</span>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <span className="text-8xl">🍕</span>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <span className="text-8xl">🍟</span>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-8xl">🥤</span>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <span className="text-8xl">🥗</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl mb-8">Experience the best food and drinks in town</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p>123 Main Street<br />Your City, State 12345</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p>Mon-Sun: 8AM - 10PM</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-4xl hover:scale-110 transition">📘</a>
            <a href="#" className="text-4xl hover:scale-110 transition">📷</a>
            <a href="#" className="text-4xl hover:scale-110 transition">🐦</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Just Juice</p>
          <p className="text-gray-400">Where Flavor Meets Freshness</p>
          <p className="text-gray-500 mt-4 text-sm">© 2025 Just Juice. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

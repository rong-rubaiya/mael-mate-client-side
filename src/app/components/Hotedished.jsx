"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HotDishesMarquee() {
  const dishes = [
    {
      id: 1,
      name: "Spicy Chicken Biryani",
      availability: 12,
      img: "/dishes/dish1.jpg",
    },
    {
      id: 2,
      name: "Beef Burger",
      availability: 8,
      img: "/dishes/dish2.jpg",
    },
    {
      id: 3,
      name: "Alfredo Pasta",
      availability: 15,
      img: "/dishes/dish3.jpg",
    },
    {
      id: 4,
      name: "Veggie Bowl",
      availability: 10,
      img: "/dishes/dish4.jpg",
    },
  ];

  return (
    <section className="w-full py-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 fontext">
        Today's Hot Dish
      </h2>

      {/* MARQUEE WRAPPER */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex flex-row gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18, // speed (lower = faster)
            ease: "linear",
          }}
        >
          {/* Duplicate array to make smooth loop */}
          {[...dishes, ...dishes].map((dish, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-t-full overflow-hidden border border-gray-200 shadow-sm min-w-[220px]"
            >
              {/* Image */}
              <div className="relative h-36 w-full">
                <Image
                 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Availability: {dish.availability} items
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

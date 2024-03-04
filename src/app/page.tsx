"use client";

import { useState } from "react";
import CartDropable from "./components/cart";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import FruitDropable from "./components/fruit";

export default function Home() {
  const fruite = ["Apple", "banana", "Lemon", "Mango", "pear"];
  const [cartItems, setCartItems] = useState<string[]>([]);
  const addItemsToCart = (e: DragEndEvent) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== "cart-droppable" || !newItem) return;
    const temp = [...cartItems];
    temp.push(newItem);
    setCartItems(temp);
  };

  return (
    <DndContext onDragEnd={addItemsToCart}>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="border-r-2 border-gray-400">
            <h1 className="py-8">Fruit List</h1>
            {fruite.map((list, index) => {
              return (
                <ul className="block max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <FruitDropable key={index}>{list}</FruitDropable>
                </ul>
              );
            })}
          </div>
          <div className="border-r-2 border-gray-400">
            <h1 className="py-8">My cart</h1>
            <ul>
              {cartItems.length > 0 ? (
                <ul>
                  <CartDropable items={cartItems} />
                </ul>
              ) : (
                <p>Your cart is empty</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

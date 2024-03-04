"use client";
import { useDroppable } from "@dnd-kit/core";
import React, { FC } from "react";
import styles from "./cart.module.css";
interface ICartDroppable {
  items: string[];
}
const CartDropable: FC<ICartDroppable> = (props) => {
  const { setNodeRef } = useDroppable({
    id: "cart-droppable",
  });

  return (
    <div>
      <ul ref={setNodeRef}>
        {props?.items?.map((item: any, idx: any) => {
          return (
            <li key={`${item}-${idx}`} className={styles["cart-item"]}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartDropable;

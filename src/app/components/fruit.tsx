"use client";
import { useDraggable } from "@dnd-kit/core";
import React, { FC } from "react";
import styles from "./fruit.module.css";
import { CSS } from "@dnd-kit/utilities";
interface IFruitDroppable {
  children: string;
}
const FruitDropable: FC<IFruitDroppable> = (props) => {
  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
    useDraggable({
      id: props.children,
      data: { title: props.children },
    });
  return (
    <div
      ref={setNodeRef}
      className={styles["fruit-item"]}
      style={{ transform: CSS.Translate.toString(transform) }}
    >
      <li {...attributes} ref={setActivatorNodeRef} {...listeners}>
        {props.children}
      </li>
    </div>
  );
};

export default FruitDropable;

import { Products } from "@/interfaces";
import React, { FC } from "react";
import styles from "./card.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  items: Products;
}

const Card: FC<Props> = ({ items }) => {
  const router = useRouter();

  const onClick = () => {
    if (items.type === "accessories") {
      router.push(`/${items.type}/${items._id}`);
    } else {
      router.push(`/${items._id}`);
    }
  };

  return (
    <div className={styles.card}>
      <Image
        src={items.img}
        alt={items.model}
        className={styles.img}
        width={140}
        height={90}
      />
      <h2 className={styles.model}>{items.model}</h2>
      <p className={styles.price}>${items.price}</p>
      <button className={styles.button} onClick={onClick}>
        Ver más
      </button>
    </div>
  );
};

export default Card;

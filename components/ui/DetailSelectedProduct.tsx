import React, { FC, useState } from "react";
import { Products } from "@/interfaces";
import styles from "./detailSelectedProduct.module.css";
import FormContact from "./FormContact";
import Image from "next/image";

interface Props {
  item: Products;
}

const DetailSelectedProduct: FC<Props> = ({ item }) => {
  const [showForm, setShowForm] = useState(false);

  const { model, price, description, img } = item;

  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as Element;
    if (target.className.includes(styles.modal)) {
      setShowForm(false);
    }
  };

  const handlerUserRequest = () => {
    setShowForm(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={img} alt={`${model}`} width={640} height={480} />
      </div>
      <div className={styles.right}>
        <h1>{model}</h1>
        <h5>USD ${price}</h5>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.purple}`}>
            Purchase
          </button>
          <button className={`${styles.button} ${styles.black}`}>
            Add to cart
          </button>
        </div>
        <div className={styles.description}>
          <p>Descripción: {description}</p>
        </div>

        {!showForm ? (
          <button
            className={`${styles.button} ${styles.getQuote}`}
            onClick={handlerUserRequest}
          >
            Get quote
          </button>
        ) : (
          <div
            className={`${styles.modal} ${showForm ? styles.visible : ""}`}
            onClick={closeModal}
          >
            <div className={styles.modalContent}>
              <FormContact item={item} closeForm={() => setShowForm(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailSelectedProduct;

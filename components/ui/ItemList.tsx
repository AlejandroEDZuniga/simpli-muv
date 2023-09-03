import React, { FC, useState, useEffect } from "react";
import Card from "./Card";
import styles from "./ItemList.module.css";
import { Products } from "../../interfaces/products";
import Select from "./Select";

interface Props {
  items: Products[];
  itemType: "motorcycle" | "accessory";
}

const ItemList: FC<Props> = ({ items, itemType }) => {
  const [selectedOrder, setSelectedOrder] = useState<string>("default");
  const [filteredItems, setFilteredItems] = useState<Products[]>(items);

  const [page, setPage] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(e.target.value);
  };

  useEffect(() => {
    const fetchItems = async () => {
      if (itemType == "motorcycle") {
        const res = await fetch(
          `/api/products?order=${selectedOrder}&page=${page}`
        );
        const data = await res.json();

        setFilteredItems(data);
      } else if (itemType === "accessory") {
        const res = await fetch(
          `/api/accesories/?order=${selectedOrder}&page=${page}`
        );

        const data = await res.json();
        setFilteredItems(data);
      }
      return;
    };

    if (selectedOrder !== "default" || page !== 1 ) {
      fetchItems();
    } else {
      setFilteredItems(items);
    }
  }, [selectedOrder, items, page]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.selectContainer}>
        <div className={styles.buttonContainer}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1 }>
            &lt; Back
          </button>
          <span>{page}</span>
          <button onClick={() => setPage(page + 1)} disabled={page === 2}>Forward &gt;</button>
        </div>
        <Select handleChange={handleChange} />
      </div>
      <div className={styles.cardContainer}>
        {filteredItems.map((item, index) => (
          <Card key={index} items={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

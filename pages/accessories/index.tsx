import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import ItemList from "@/components/ui/ItemList";
import { Products } from "@/interfaces";
import { GetServerSideProps } from "next";
import { dbEntries } from "@/database";

interface AccessoriesProps {
  items: Products[];
  itemType: "accessory" | "motorcycle";
}

const Accessories: FC<AccessoriesProps> = ({ items, itemType }) => {
  return (
    <Layout title="Accessories">
      <ItemList items={items} itemType={itemType} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = parseInt(query.page as string, 12) || 1;
  const items = await dbEntries.getAccesories(page);

  if (!items) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { items, itemType: "accessory" },
  };
};

export default Accessories;

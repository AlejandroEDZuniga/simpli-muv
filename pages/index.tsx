import React from "react";
import Layout from "@/components/layout/Layout";
import ItemList from "@/components/ui/ItemList";
import { Products } from "@/interfaces";
import { dbEntries } from "@/database";
import { GetServerSideProps } from "next";

interface HomeProps {
  items: Products[];
  itemType: "motorcycle" | "accessory";
}

const Home: React.FC<HomeProps> = ({ items, itemType }) => {
  return (
    <Layout title="Home">
      <ItemList items={items} itemType={itemType} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = parseInt(query.page as string, 12) || 1;
  const items = await dbEntries.getProducts(page);

  if (!items) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { items, itemType: "motorcycle" },
  };
};

export default Home;



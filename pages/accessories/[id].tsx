import React, { FC } from "react";
import { Products } from "@/interfaces";
import Layout from "@/components/layout/Layout";
import { GetServerSideProps } from "next";
import { dbEntries } from "@/database";
import DetailSelectedProduct from "@/components/ui/DetailSelectedProduct";

interface Props {
  entry: Products;
}

const SelectedProduct: FC<Props> = ({ entry }) => {
  const { model } = entry;
  
  return (
    <Layout title={model}>
      <DetailSelectedProduct item={entry}/>
    </Layout>
  );
};

export default SelectedProduct;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getAccessoryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/", 
        permanent: false,
      },
    };
  }
  return {
    props: { entry },
  };
};

import  { FC } from "react";
import { Products } from "@/interfaces";
import { GetServerSideProps } from "next";
import { dbEntries } from "@/database";
import Layout from '@/components/layout/Layout';
import DetailSelectedProduct from "@/components/ui/DetailSelectedProduct";

interface Props {
  entry: Products;
}

const SelectedProduct: FC<Props> = ({ entry }) => {
  const { _id, model } = entry;
  return (
    <Layout title={model}>
      <DetailSelectedProduct item={entry}/>
    </Layout>
  );
};

export default SelectedProduct;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getMotorcicleById(id);

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

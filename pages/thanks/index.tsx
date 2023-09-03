import React from "react";
import ThankYou from "@/components/ui/ThankYou";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

const index = () => {
  const router = useRouter();
  return (
    <Layout title="Thank you">
      <ThankYou onGoHome={() => router.push("/")} />
    </Layout>
  );
};

export default index;

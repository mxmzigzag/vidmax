import React from "react";

import PageLayout from "../layouts/PageLayout";

import MainBanner from "../components/MainBanner/MainBanner";
import Featured from "../components/Featured/Featured";

function Main() {
  return (
    <PageLayout>
      <MainBanner />
      <Featured />
    </PageLayout>
  );
}

export default Main;

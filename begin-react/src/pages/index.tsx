import type { NextPage } from "next";
import { Template } from "../components/templates";
import { Body } from "src/components/organisms/Body";

const Home: NextPage = () => {
  return (
    <Template title="test">
      <Body />
    </Template>
  );
};

export default Home;

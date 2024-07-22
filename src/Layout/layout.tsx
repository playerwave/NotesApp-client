import React from "react";
import Header from "../components/Header/Header";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const layout = ({ children, showHero = false }: Props) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      Footer
    </div>
  );
};

export default layout;

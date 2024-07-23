import React from "react";
import Header from "../components/Header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      Footer
    </div>
  );
};

export default Layout;

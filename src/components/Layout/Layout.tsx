import React from "react";
import Header from "../Header/Header";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100"}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
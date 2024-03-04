import React from "react";
import Header from "../Header/Header";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 mt-5 mx-auto"} style={{width:1000}}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
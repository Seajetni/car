import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <nav >
        <Nav />
      </nav>

      <div>{props.children}</div>

      <Footer />
    </div>
  );
}

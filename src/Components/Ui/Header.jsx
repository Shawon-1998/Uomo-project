import React from "react";
import Image from "../common/Image";
import logo from "/images/logo.png";
import Container from "./Container";
import { navItems } from "../../../Api/navData";

const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <div className="flex items-center ">
            <Image src={logo} />
            <ul className="flex gap-11 ml-14 ">
              {navItems?.map((items) => {
                return <li className="font-jost text-sm font-medium leading-6 text-primary-black" key={items.id}>{items.name}</li>;
              })}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;

import React, { type JSX } from "react";
import { svgIcon } from "~/utils/utils";

const NavbarItem = ({
  icon,
  title,
  active,
}: {
  icon: string;
  title: string;
  active: boolean;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`navbar-item p-2 flex flex-col items-center w-26 cursor-pointer hover:bg-gray-50 ${
            active ? "" : ""
          } `}
        >
          <img src={svgIcon(icon)} alt="" className="mb-1 w-10" />
          <h2
            className={`font-medium text-[14px] mb-[4px] ${
              active ? "text-primary-500" : "text-gray-600"
            }  `}
          >
            {" "}
            {title}
          </h2>
          {active ? <img src={svgIcon("nav_zigzag")} alt="" /> : ""}
        </button>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar bg-white grid items-center grid-cols-3 lg:grid-cols-6 md:grid-cols-6 p-4 shadow-[0_4px_5px_rgba(0,0,0,0.059)] rounded-2xl ">
      <NavbarItem icon={"camera"} title={"Spiti Valley"} active={true} />
      <NavbarItem icon={"passport"} title={"Kasol"} active={false} />
      <NavbarItem icon={"travel"} title={"Kashmir"} active={false} />
      <NavbarItem icon={"camera"} title={"Kasol"} active={false} />
      <NavbarItem icon={"travel"} title={"Mumbai"} active={false} />
      <NavbarItem icon={"passport"} title={"Banglore"} active={false} />
      {/* <NavbarItem /> */}
    </nav>
  );
};

export default Navbar;

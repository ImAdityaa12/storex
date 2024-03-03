import { OrganizationSwitcher, UserButton } from "@clerk/clerk-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-10 py-2 bg-gray-100 shadow-md shadow-black/10">
      <h1>Storex</h1>
      <div>
        <OrganizationSwitcher />
      </div>
      <UserButton />
    </div>
  );
};

export default Header;

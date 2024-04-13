"use client";
import Buttons from "./_component/button";
import { NavigationMenuBar } from "./_component/menu";

const Navbar = () => {
  return (
    <div className="w-full bg-[#F47621] fixed top-[120px] z-30 ">
      <div className="flex items-center justify-center bg-red md:px-10 sticky top-0 z-50 ">
        <div className="flex w-full justify-between">
          <NavigationMenuBar/>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
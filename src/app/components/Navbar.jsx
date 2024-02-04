import { useState, useEffect } from "react";
import menuLinks from "./MenuLinks";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <nav
      className={`fixed w-full z-[999] justify-between flex ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <h4 className="text-xl font-bold mx-7 my-3">OFLYFL</h4>
      <ul
        className={`text-purple-900 hidden px-10 font-medium rounded-bl-full items-center md:flex gap-16
       py-5 text-lg ${sticky ? "md:bg-white/0" : "bg-white"}`}
      >
        {menuLinks?.map((menu, i) => (
          <li key={i} className="hover:text-cyan-400">
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>
      <BiMenu
        onClick={() => setOpen(!open)}
        className={`text-3xl md:hidden m-5 ${
          open ? "text-purple-900" : "text-purple-100"
        } z-[999]`}
      />
      <ul
        className={`flex flex-col justify-center gap-10 items-center text-lg md:hidden text-purple-900 absolute
        w-2/3 h-screen px-7 font-medium bg-white top-0 ${
          open ? "right-0" : "right-[999px]"
        }`}
      >
        {menuLinks?.map((menu, i) => (
          <li
            key={i}
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { PiShoppingCartFill } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const ItemMenu = [
  { title: "home", link: "/", type: "link" },
  {
    title: "services",
    type: "dropdown",
    items: [
      { title: "buy an article", href: "/buy" },
      { title: "sell an article", href: "/sell" },
    ],
  },
  { title: "les plus vendus", link: "/plusVendus", type: "link" },
  { title: "à propos", link: "/apropos", type: "link" },
  { title: "contact", link: "/contact", type: "link" },
];

const Header = () => {
  return (
    <div className="py-4 px-5 flex flex-col gap-y-6 bg-blacko md:px-10">
      {/*  */}
      <div className=" flex items-center justify-between ">
        {/* logo */}
        <div className="text-accent font-nunito cursor-pointer text-xl font-bold hover:text-accent/70 ">
          Market Place
        </div>

        {/* menu */}
        <div>
          <ul className="flex gap-8">
            {ItemMenu.map((item, index) => (
              <li key={index} className="">
                <Link
                  to={item.link}
                  className="cursor-pointer text-lightText hover:text-accent "
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*  */}
        <div className="flex gap-8 items-center">
          <AiOutlineHeart className="text-lightText text-3xl cursor-pointer hover:text-accent " />
          <PiShoppingCartFill className="text-lightText text-3xl cursor-pointer hover:text-accent " />
          <div className="cursor-pointer transition-all border border-dashed border-accent rounded-md text-lightText py-1.5 px-6 hover:bg-accent ">
            Se Connecter
          </div>
        </div>
        {/*  */}
      </div>

      {/*  */}
      <div className="flex  gap-8 md:gap-12 ">
        <div className="py-1 flex gap-1 items-center text-lightText border-b border-accent">
          Toutes les boutiques
          <RiArrowDropDownLine className="text-2xl" />
        </div>

        {/* search */}
        <div className="  w-[50vw]  flex items-center py-2  ">
          <div className="flex-[1] flex gap-2 bg-lightText/80 items-center pl-3 py-2 rounded-l-md ">
            <div>Toutes les categories</div>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          <div className="flex-[3] w-full flex items-center relative">
            <input
              type="text"
              placeholder="Boutique, fashion, pharmacie, restaurant, ..."
              className="w-full  py-2 rounded-r-md px-4 bg-lightText/20  "
            />
            <IoSearch className="text-lightText absolute  right-5 " />
          </div>
        </div>

        {/*  */}
        <div className="flex items-center gap-6 group ">
          {/* <FaRegUser className="text-2xl text-lightText hover:text-accent " /> */}
          <Link to={"/"} className="text-lightText hover:text-accent ">
            Créer une boutique
          </Link>
          <Link to={"/"} className="text-lightText hover:text-accent ">
            Voir mes boutiques
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

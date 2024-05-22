import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
export const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Profile",
    link: "/profile",
  },
];
export const ProfileLinks = [
  {
    name: "Profile",
    icon: <CgProfile />,
    href: "/profile",
  },
  {
    name: "Orders",
    icon: <MdOutlineProductionQuantityLimits />,
    href: "/profile/orders",
  },
  {
    name: "Setting",
    icon: <CiSettings />,
    href: "/profile/settings",
  },
];
export const CategorysNames = [
  {
    name: "phone",
    image: "/assets/images/phone.jpg",
  },
  {
    name: "phone case",
    image: "/assets/images/phoneCase.jpg",
  },
  {
    name: "accessories",
    image: "/assets/images/accessories.jpg",
  },
  
  {
    name: "watch",
    image: "/assets/images/watch.jpg",
  },
];

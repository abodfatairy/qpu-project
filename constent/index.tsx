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
    link:   `/products/`,
  },
  {
    label: "Profile",
    link: `/profile/${0}`,
  },
];
export const ProfileLinks = [
  {
    name: "Profile",
    icon: <CgProfile />,
    href: `/profile/${0}`,
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

export const testDataProfile = [
  {
    id: "0",
    name: "fadi haj",
    reviews: "3.8",
    image: "/assets/images/1.jpg",
    firstAddres: "dumar",
    firstAddresDesc: "alrz near loco station",
    secondAddres: "rabwa",
    secondAddresDesc: "dumar near the bz",
    phoneNumber: "0999996547",
    email: "fadi@gmail.com",
    isBlocked: false,
    isAdmin: false,
    isOwner: false,
  },

  {
    id: "1",
    name: "abod fta ",
    reviews: "8.3",
    image: "",
    firstAddres: "Damascus",
    firstAddresDesc: "Medan Near The Masa Blaza Mall",
    secondAddres: "Damascus",
    secondAddresDesc: "Sahnaya The Town Center Mall",
    phoneNumber: "0947749499",
    email: "abod@gmail.com",
    isBlocked: false,
    isAdmin: false,
    isOwner: false,
  },
];

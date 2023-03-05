import { site, subcategory } from "@/config/api";
import Link from "next/link";

const SideNavigation = () => {
  const subArr = [
    "Pistachio",
    "Mushroom",
    "Zucchini",
    "Pepper",
    "Okra",
    "Tomato",
    "Green Beans",
    "Orange",
    "Apple",
    "Kiwi",
    "Peach",
    "Apricot",
    "Date",
    "Raisin",
    "Fig",
    "Banana",
    "Strawberry",
    "saffron",
    "Barberries",
    "Broccoli",
    "Pumpkin",
    "Onion",
    "green",
    "onion",
  ];
  return (
    <div
      id="shortNavigation"
      className="shadow-sm text-[10px] md:text-base lg:w-[230px] sticky left-0 top-0 h-fit p-2 md:p-6 mx-auto"
    >
      {subArr?.map((item, i = 1) => (
        <div
          key={++i}
          className="transition ease-in-out duration-300 hover:text-red-400 "
        >
          <Link href={`${site}products/${subcategory}/${i}`}>
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideNavigation;

import CartItem from "../models/CartItem";
import tshirt from "../assets/images/tshirt.png";
import waterBottle from "../assets/images/water-bottle.png";

export const CART_ITEMS: CartItem[] = [
  {
    id: "1",
    item: {
      id: "1",
      name: "Basic T-Shirt",
      description: "",
      minimunAmount: 1,
      image: tshirt,
      price: 13.5,
    },
    amount: 10,
  },
  {
    id: "2",
    item: {
      id: "1",
      name: "Woman bottle",
      description: "",
      minimunAmount: 1,
      image: waterBottle,
      price: 36.5,
    },
    amount: 10,
  },
];

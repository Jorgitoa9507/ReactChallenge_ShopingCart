import { Stack, Typography } from "@mui/material";
import { useShopingCartContext } from "../../context/shoppingCartState";
import { calcPackPrice, isItemsPack } from "../../helpers/utils";
import CartItem from "../../models/CartItem";
import ItemsPack from "../../models/ItemsPack";
import PackCartItem from "./PackCartItem";
import SingleCartItem from "./SingleCartItem";

export interface CartItemComponentProps {
  cartItem: CartItem;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({ cartItem }) => {
  const { dispatch } = useShopingCartContext();

  function deleteItemHandler(id: string) {
    dispatch?.({
      type: "DELETE_CART_ITEM",
      payload: {
        cartItemId: id,
      },
    });
  }

  function updateQuantityHandler(quantity: number) {
    dispatch?.({
      type: "SET_CART_ITEM_QUANTITY",
      payload: {
        cartItemId: cartItem.id,
        quantity,
      },
    });
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      {isItemsPack(cartItem.item) ? (
        <PackCartItem
          cartItem={cartItem}
          onDelete={deleteItemHandler}
          onChangeQuantity={updateQuantityHandler}
        />
      ) : (
        <SingleCartItem
          cartItem={cartItem}
          onDelete={deleteItemHandler}
          onChangeQuantity={updateQuantityHandler}
        />
      )}
      <Stack spacing={1} alignItems="end">
        <Typography
          variant="subtitle1"
          fontWeight={(theme) => theme.typography.fontWeightBold}>
          $
          {(isItemsPack(cartItem.item)
            ? calcPackPrice(cartItem.item)
            : cartItem.item.price
          ).toFixed(2)}
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight={(theme) => theme.typography.fontWeightBold}>
          Total: $
          {(
            (isItemsPack(cartItem.item)
              ? calcPackPrice(cartItem.item)
              : cartItem.item.price) * cartItem.amount
          ).toFixed(2)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CartItemComponent;

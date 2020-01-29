import { createSelector } from 'reselect'
 
const selectCart = state =>  state.cart;

export const selectCartItemsOrdinary = state => {
    const cart = selectCart(state);
    return cart.cartItems;
}

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    selectCart,
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
         0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,
         0)
)
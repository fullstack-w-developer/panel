export const getTotalCartCount = (cartItems: CartItem[]) => {
    let totalCount = 0;
    cartItems.forEach((cartItem) => {
        totalCount += cartItem.count;
    });
    return totalCount;
};

export const findCartItem = (cartItems: CartItem[], id: number) => {
    return cartItems.find(({ product }) => product.id === id);
};

export const findCartItemIndex = (cartItems: CartItem[], id: number) => {
    return cartItems.findIndex(({ product }) => product.id === id);
};


export interface WishlistItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const addToWishlist = (item: WishlistItem) => {
  const wishlist = getWishlist();
  if (!wishlist.some(wishItem => wishItem.id === item.id)) {
    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    return true;
  }
  return false;
};

export const removeFromWishlist = (itemId: string) => {
  const wishlist = getWishlist();
  const filteredWishlist = wishlist.filter(item => item.id !== itemId);
  localStorage.setItem('wishlist', JSON.stringify(filteredWishlist));
};

export const getWishlist = (): WishlistItem[] => {
  const wishlistString = localStorage.getItem('wishlist');
  return wishlistString ? JSON.parse(wishlistString) : [];
};

export const isInWishlist = (itemId: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === itemId);
};

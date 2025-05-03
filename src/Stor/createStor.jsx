import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.find((i) => i._id === item._id)
      if (exists) {
        return {
          cart: state.cart.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),
  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
}))

export default useCartStore

import { create } from "zustand";
import { CartItem } from "../interfaces/CartItem";

export interface CartState {
    items: CartItem[];
    size: number;
    total: number;
    addToCart: (item: CartItem, quantity: number) => void;
    removeFromCart: (itemId: number) => void;
    updateQuantity: (itemId: number, newQuantity: number) => void;
    clearCart: () => void;
}


export const useCartStore = create<CartState>((set) => ({

    items: [],
    size: 0,
    total: 0,

    addToCart: (item: CartItem, quantity: number) => set((state) => {
        const itemToUpdate = state.items.find((actItem) => item.id === actItem.id);

        if (!itemToUpdate) {
            return {
                items: [...state.items, { ...item, quantity }],
                size: state.size + quantity,
                total: parseFloat((state.total + (item.price * quantity)).toFixed(2))
            }
        }

        const filteredItems = state.items.filter((actItem) => actItem.id !== itemToUpdate.id);
        return {
            items: [...filteredItems, { ...item, quantity: itemToUpdate.quantity + quantity }],
            size: state.size + quantity,
            total: parseFloat((state.total + (item.price * quantity)).toFixed(2))
        }

    }),

    removeFromCart: (itemId) => set((state) => {
        const itemToRemove = state.items.find((item) => item.id === itemId);
        if (!itemToRemove) {
            return state;
        }

        return {
            items: state.items.filter((item) => item.id !== itemId),
            size: state.size - itemToRemove.quantity,
            total: parseFloat((state.total - (itemToRemove.price * itemToRemove.quantity)).toFixed(2)),
        };
    }),

    updateQuantity: (itemId, newQuantity) => set((state) => {
        const itemToUpdate = state.items.find((item) => item.id === itemId);
        if (!itemToUpdate) {
            return state;
        }

        const updatedItems = state.items.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );

        const previousQuantity = itemToUpdate.quantity || 0;
        const previousPrice = itemToUpdate.price || 0;
        const updatedPrice = (newQuantity - previousQuantity) * previousPrice;

        return {
            items: updatedItems,
            total: parseFloat((state.total + updatedPrice).toFixed(2)),
        };
    }),

    clearCart: () => set(() => ({
        items: [],
        size: 0,
        total: 0,
    })),
}
));
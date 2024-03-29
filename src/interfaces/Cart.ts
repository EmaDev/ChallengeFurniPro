import { CartItem } from "./CartItem";

export interface Cart {
    items: CartItem[];
    size: number;
    total: number;
}
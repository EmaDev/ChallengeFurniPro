import { useEffect, useState } from 'react'
import { getAllProducts, getProductsByCategory, getProductsByTitle } from '../api/products';
import { DummyApiAdapter } from '../config/adapters/DummyApiAdapter';
import { Product } from '../interfaces/Product';
import { getAllCategories } from '../api/categories';
import { Category } from '../interfaces/Category';

export default function useProducts() {

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [allCategories, setAllCategories] = useState<Category[]>([]);
    const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState<Category>("");
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        initialLoad();
    }, [])

    const initialLoad = async () => {
        const categories = await getAllCategories(DummyApiAdapter);
        setActiveCategory(categories[0]);
        setAllCategories( categories );
        setAllProducts(await getAllProducts(DummyApiAdapter));

        setProductsByCategory(await getProductsByCategory(  DummyApiAdapter, categories[0]))

        setIsLoading(false);
    }

    const loadProductsByCategory = async(category: Category) => {
        setIsLoading(true);
        setActiveCategory(category);
        setProductsByCategory(await getProductsByCategory(  DummyApiAdapter, category))
    }

    return {isLoading, allProducts, allCategories, productsByCategory, activeCategory, loadProductsByCategory}
}
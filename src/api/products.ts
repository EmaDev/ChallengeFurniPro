import { HttpAdapter } from "../config/adapters/http/http.adapter"
import { Product } from "../interfaces/Product";
import {  DummyProductsResponse } from "../interfaces/dummy/ProductResponse";
import { ProductMapper } from "../interfaces/mappers/ProductMapper";

export const getAllProducts = async( fetcher: HttpAdapter):Promise<Product[]> => {
     
    try {
        const products = await fetcher.get<DummyProductsResponse>("/products");
        
        return products.products.map( prod => ProductMapper.fromDummyProductToEntity(prod) );
        
    } catch (error) {
        throw new Error("Error fetching all products - (getAllProducts)")
    }
}

export const getProductsByCategory = async( fetcher: HttpAdapter, category: string):Promise<Product[]>=> {
     
    try {
        const products = await fetcher.get<DummyProductsResponse>(`/products/category/${category}`);
        
        return products.products.map( prod => ProductMapper.fromDummyProductToEntity(prod) );
        
    } catch (error) {
        throw new Error("Error fetching products by category - (getProductsByCategory)")
    }
}

export const getProductsByTitle = async( fetcher: HttpAdapter, title: string):Promise<Product[]>=> {
     
    try {
        const products = await fetcher.get<DummyProductsResponse>(`/products/search?q=${title}`);
        
        return products.products.map( prod => ProductMapper.fromDummyProductToEntity(prod) );
        
    } catch (error) {
        throw new Error("Error fetching products by category - (getProductsByCategory)")
    }
}
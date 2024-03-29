import type {Product}  from "../Product";
import type { DummyProduct } from "../dummy/ProductResponse";

export class ProductMapper {

    static fromDummyProductToEntity( product: DummyProduct ):Product {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price:product.price,
            discountPercentage: product.discountPercentage + "%",
            rating: product.rating,
            stock: product.stock,
            brand: product.brand,
            category: product.category,
            thumbnail: product.thumbnail,
            images: product.images 
        }
    }
}
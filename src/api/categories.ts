import { HttpAdapter } from "../config/adapters/http/http.adapter"
import { Category } from "../interfaces/Category";
import { DummyCategories } from "../interfaces/dummy/CategoryResponse";
import { CategoryMapper } from "../interfaces/mappers/CategoryMapper";

export const getAllCategories = async (fetcher: HttpAdapter): Promise<Category[]> => {

    try {
        const categories = await fetcher.get<DummyCategories>("/products/categories");

        return categories.map( cat => CategoryMapper.fromDummyCategoryToEntity( cat ));

    } catch (error) {
        throw new Error("Error fetching all products - (getAllProducts)")
    }
}
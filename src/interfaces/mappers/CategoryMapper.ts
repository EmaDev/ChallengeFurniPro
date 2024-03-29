import { Category } from "../Category";
import { DummyCategory } from "../dummy/CategoryResponse";

export class CategoryMapper {

    static fromDummyCategoryToEntity(category: DummyCategory): Category {
        return category
    }
}
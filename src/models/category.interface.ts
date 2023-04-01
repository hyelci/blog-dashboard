export interface CategoryDetails {
  id: string;
  label: string;
  title?: string;
  description?: string;
}

export interface CreateCategoryRequest {
  label?: string;
  description?: string;
  title?: string;
}

export interface CategoriesResponse {
  categories: CategoryDetails[];
}

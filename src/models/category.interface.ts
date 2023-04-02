export interface CategoryDetails {
  id: string;
  label: string;
  title?: string;
  description?: string;
  displayPosition?: number;
}

export interface CreateCategoryRequest {
  label?: string;
  description?: string;
  title?: string;
  displayPosition: number;
}

export interface CategoriesResponse {
  categories: CategoryDetails[];
}

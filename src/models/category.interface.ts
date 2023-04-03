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

export interface TagDetails {
  id: string;
  label?: string;
  slug?: string;
  language?: string;
}

export interface TagsResponse {
  tags: TagDetails[];
}

export interface CreateTagRequest {
  label?: string;
  slug?: string;
  language?: string;
}

export interface PostDetails {
  id: string;
  title?: string;
}

export interface BlogsResponse {
  draftPosts: PostDetails[];
}

export interface CreatePostRequest {
  title?: string;
}

export interface Products {
  id?: string;
  name?: string;
  description?: string;
  picture?: string;
  cost?: number;
  categories?: string[];
}

export interface AddProduct {
  name: string;
  description?: string;
  picture?: string;
  cost: number;
  categories: string[];
}

export interface UpdateProduct {
  name?: string;
  description?: string;
  picture?: string;
  cost?: number;
  categories?: string[];
}

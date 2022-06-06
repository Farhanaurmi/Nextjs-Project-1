export interface AllProductListProps {
  allproducts: SingleProductProps[];
}


export interface SingleProductProps {
    id: number;
    name: string;
    SKU:string;
    color:string;
    size:string;
    price: number;
    description: string;
    category: number;
    brand: string;
    file_content: any[];
  }

export interface CategoryProps {
  id: number;
  name: string;
}


  
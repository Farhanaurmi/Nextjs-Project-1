export interface AllProductListProps {
  product: SingleProductProps[];
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

  
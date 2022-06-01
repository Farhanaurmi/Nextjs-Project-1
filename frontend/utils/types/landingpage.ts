export interface AllProductListProps {
  product: SingleProductProps[];
}


export interface SingleProductProps {
    id: number;
    name: string;
    SKU:string;
    price: number;
    description: string;
    category: number;
    brand: number;
    media: any[];
  }

  
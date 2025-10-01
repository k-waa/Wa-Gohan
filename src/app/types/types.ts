type CartItemType = {
    id: number;
    name: string;
    price: number; // 税込価格
    quantity: number;
    image: string;
}

type ProductType = {
    title: string;
    contents: string;
    price: number;
    weight: number;
}

export type { CartItemType, ProductType }
import { ProductType } from "../types/types";

type ProductCardProps = {
    product: ProductType
}

export default function ProductCard(props: ProductCardProps) {
    const { product } = props
    const { title, contents, price, weight } = product;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl border border-gray-100">
            <img src="https://placehold.co/600x400/8BC34A/fff?text=コシヒカリ" alt="コシヒカリの米袋" className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-primary mb-3 font-semibold">{contents}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold">¥{price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">{weight}kg</span>
                </div>
                <button className="w-full mt-4 bg-secondary text-white py-2 rounded-full font-bold hover:bg-primary-dark transition duration-300 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <span>カートに追加</span>
                </button>
            </div>
        </div>
    )
}
import { ProductType } from "../types/types";
import ProductCard from "./ProductCard";

const initialProductLists: ProductType[] = [
    { title:"新潟県産 コシヒカリ", contents:"新米】粘りと甘みが絶品", price:4500, weight:5 },
    { title:"あきたこまち", contents:"冷めても美味しい、万能米", price:3800, weight:5 },
    { title:"山形県産 つや姫", contents:"甘みが強く、粒立ちが良い", price:5000, weight:5 },
    { title:"特別栽培 無洗米", contents:"手間いらず、環境に優しい", price:4000, weight:4.5 },
]

export default function ProductsSection() {

    return (
        <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">おすすめの商品ラインナップ</h2>

            {/* フィルタリング/ソートエリア */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
                <div className="flex space-x-4">
                    <select className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-primary focus:border-primary">
                        <option>銘柄で絞り込む</option>
                        <option>コシヒカリ</option>
                        <option>あきたこまち</option>
                        <option>ゆめぴりか</option>
                    </select>
                    <select className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-primary focus:border-primary">
                        <option>産地で絞り込む</option>
                        <option>新潟</option>
                        <option>北海道</option>
                        <option>秋田</option>
                    </select>
                </div>
                <select className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-primary focus:border-primary">
                    <option>人気順に並び替え</option>
                    <option>価格が安い順</option>
                    <option>新着順</option>
                </select>
            </div>

            {/* 商品グリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* 商品カード 1 */}
                {
                    initialProductLists.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))
                }
            </div>
        </section>
    )
}
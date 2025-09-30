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
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl border border-gray-100">
                    <img src="https://placehold.co/600x400/8BC34A/fff?text=コシヒカリ" alt="コシヒカリの米袋" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">新潟県産 コシヒカリ</h3>
                        <p className="text-sm text-primary mb-3 font-semibold">【新米】粘りと甘みが絶品</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-extrabold text-red-600">¥4,500</span>
                            <span className="text-sm text-gray-500">5kg</span>
                        </div>
                        <button className="w-full mt-4 bg-secondary text-white py-2 rounded-full font-bold hover:bg-primary-dark transition duration-300 flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span>カートに追加</span>
                        </button>
                    </div>
                </div>

                {/* 商品カード 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl border border-gray-100">
                    <img src="https://placehold.co/600x400/8BC34A/fff?text=あきたこまち" alt="あきたこまちの米袋" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">秋田県産 あきたこまち</h3>
                        <p className="text-sm text-primary mb-3 font-semibold">冷めても美味しい、万能米</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-extrabold text-gray-900">¥3,800</span>
                            <span className="text-sm text-gray-500">5kg</span>
                        </div>
                        <button className="w-full mt-4 bg-secondary text-white py-2 rounded-full font-bold hover:bg-primary-dark transition duration-300 flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span>カートに追加</span>
                        </button>
                    </div>
                </div>
                
                {/* 商品カード 3 (セール品) */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl border-2 border-red-500 relative">
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">SALE</div>
                    <img src="https://placehold.co/600x400/8BC34A/fff?text=つや姫" alt="つや姫の米袋" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">山形県産 つや姫</h3>
                        <p className="text-sm text-primary mb-3 font-semibold">甘みが強く、粒立ちが良い</p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm line-through text-gray-500">¥5,000</span>
                                <span className="text-2xl font-extrabold text-red-600">¥4,200</span>
                            </div>
                            <span className="text-sm text-gray-500">5kg</span>
                        </div>
                        <button className="w-full mt-4 bg-secondary text-white py-2 rounded-full font-bold hover:bg-primary-dark transition duration-300 flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span>カートに追加</span>
                        </button>
                    </div>
                </div>
                
                {/* 商品カード 4 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl border border-gray-100">
                    <img src="https://placehold.co/600x400/8BC34A/fff?text=無洗米" alt="無洗米のパッケージ" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">特別栽培 無洗米</h3>
                        <p className="text-sm text-primary mb-3 font-semibold">手間いらず、環境に優しい</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-extrabold text-gray-900">¥4,000</span>
                            <span className="text-sm text-gray-500">4.5kg</span>
                        </div>
                        <button className="w-full mt-4 bg-secondary text-white py-2 rounded-full font-bold hover:bg-primary-dark transition duration-300 flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span>カートに追加</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
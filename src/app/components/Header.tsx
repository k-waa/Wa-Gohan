export default function Header() {
    return (
        <header className="header-bg shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* ロゴ */}
                <a href="#" className="text-3xl font-bold text-primary flex items-center">
                    <svg className="w-8 h-8 mr-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 15v-4h2v4h-2zM11 9V7h2v2h-2z"/>
                    </svg>
                    <span>Wa-Gohan</span>
                </a>
                
                {/* ナビゲーション */}
                <nav className="space-x-8 hidden md:flex">
                    <a href="#products" className="text-gray-600 hover:text-primary transition duration-300 font-medium">商品一覧</a>
                    <a href="#story" className="text-gray-600 hover:text-primary transition duration-300 font-medium">生産者の想い</a>
                    <a href="#faq" className="text-gray-600 hover:text-primary transition duration-300 font-medium">よくある質問</a>
                </nav>

                {/* カートアイコン */}
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-primary transition duration-300 relative p-1 rounded-full hover:bg-gray-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">3</span>
                    </button>
                    <a href="#" className="text-white bg-primary py-2 px-4 rounded-full shadow-lg hover:bg-primary-dark transition duration-300 hidden sm:inline-block">ログイン</a>
                </div>
            </div>
        </header>
    )
}
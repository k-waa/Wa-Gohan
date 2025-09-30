export default function Footer() {
    return (
        <footer className="bg-gray-900 mt-12 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {/* 会社情報 */}
                  <div>
                      <h4 className="text-xl font-bold mb-4 text-primary">米EC</h4>
                      <p className="text-sm text-gray-400">〒100-0001</p>
                      <p className="text-sm text-gray-400">東京都千代田区...</p>
                      <p className="text-sm text-gray-400 mt-2">Tel: 00-0000-0000</p>
                  </div>
                  {/* メニュー */}
                  <div>
                      <h4 className="text-lg font-bold mb-4">サイトマップ</h4>
                      <ul className="space-y-2 text-sm">
                          <li><a href="#products" className="text-gray-400 hover:text-primary transition duration-300">商品一覧</a></li>
                          <li><a href="#story" className="text-gray-400 hover:text-primary transition duration-300">生産者の想い</a></li>
                          <li><a href="#faq" className="text-gray-400 hover:text-primary transition duration-300">よくある質問</a></li>
                      </ul>
                  </div>
                  {/* 法的情報 */}
                  <div>
                      <h4 className="text-lg font-bold mb-4">ヘルプ</h4>
                      <ul className="space-y-2 text-sm">
                          <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">特定商取引法</a></li>
                          <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">プライバシーポリシー</a></li>
                          <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">利用規約</a></li>
                      </ul>
                  </div>
                  {/* ニュースレター */}
                  <div>
                      <h4 className="text-lg font-bold mb-4">ニュースレター</h4>
                      <p className="text-sm text-gray-400 mb-3">新米情報やセール情報をお届けします。</p>
                      <input type="email" placeholder="メールアドレスを入力" className="w-full p-2 rounded-lg text-gray-900 mb-2" />
                      <button className="w-full bg-primary py-2 rounded-lg font-bold hover:bg-primary-dark transition duration-300">登録</button>
                  </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                  <p className="text-sm text-gray-500">&copy; 2025 Wa-Gohan. All rights reserved.</p>
              </div>
          </div>
        </footer>
    )
}
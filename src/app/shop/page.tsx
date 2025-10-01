import React from 'react';
import { CartItemType } from '../types/types';
import CartItemRow from '../components/CartItemRow';
import Link from 'next/link';

// --- 2. Mock Data (Initial State) ---
const initialCartItems: CartItemType[] = [
    { id: 1, name: "オーガニック野菜セット", price: 3280, quantity: 1, image: "https://placehold.co/100x100/D9F3D9/047857?text=VEGE" },
    { id: 2, name: "天然水（2L x 6本）", price: 980, quantity: 2, image: "https://placehold.co/100x100/D9F3D9/047857?text=WATER" },
    { id: 3, name: "高級オリーブオイル", price: 1850, quantity: 1, image: "https://placehold.co/100x100/D9F3D9/047857?text=OIL" },
];
const initialShippingFee = 600;

export default function ShoppingCart() {

    const subtotal = 7000;
    const shippingFee = 700;
    const total = subtotal + shippingFee

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto">
                {/* Header */}
                <header className="mb-8 border-b pb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-wider">
                        <span className="text-amber-500">🛒</span> 買い物かご
                    </h1>
                </header>

                <div className="lg:flex lg:space-x-8">
                    
                    {/* カート商品一覧 (左側: 幅広) */}
                    <div className="lg:w-2/3">
                        {initialCartItems.length === 0 ? (
                            // カートが空の場合のメッセージ
                            <div className="text-center p-10 bg-white rounded-xl shadow-md border border-amber-200">
                                <p className="text-xl text-amber-600 font-semibold mb-2">買い物かごは空です。</p>
                                <p className="text-gray-500">お買い物に戻って商品を探しましょう。</p>
                                <a href="#" className="mt-4 inline-block text-amber-700 hover:text-amber-800 font-medium">
                                    &larr; 商品一覧へ
                                </a>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {initialCartItems.map(item => (
                                    <CartItemRow 
                                        key={item.id}
                                        item={item}
                                        // onUpdateQuantity={handleUpdateQuantity}
                                        // onRemove={handleRemoveItem}
                                    />
                                ))}
                            </div>
                        )}

                        {initialCartItems.length > 0 && (
                            <div className="mt-6 flex justify-end">
                                <Link className="text-sm font-medium text-green-700 hover:text-amber-900 transition duration-150" href={'/#products'}>
                                    買い物を続ける
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* 合計金額と決済ボタン (右側: 幅狭) */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <div className="p-6 bg-green-50 rounded-xl shadow-lg border border-green-300 sticky top-4">
                            <h2 className="text-2xl font-semibold mb-4 text-green-800 border-b border-green-300 pb-2">
                                ご注文合計
                            </h2>
                            
                            <div className="space-y-3 text-gray-700">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">小計 (税込):</span>
                                    <span id="subtotal" className="font-medium">¥{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">送料:</span>
                                    <span id="shipping-fee" className="font-medium">¥{initialCartItems.length > 0 ? shippingFee.toLocaleString() : '0'}</span>
                                </div>
                                
                                <div className="pt-4 border-t border-green-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-green-800">合計金額 (税込):</span>
                                        <span id="total-amount" className="text-2xl font-extrabold text-green-900">¥{total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            <button 
                                id="checkout-button" 
                                className="mt-6 w-full py-3 bg-green-700 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 disabled:opacity-50" 
                                disabled={initialCartItems.length === 0}
                            >
                                購入手続きへ進む
                            </button>
                            
                            <p className="text-xs text-center text-gray-500 mt-3">
                                決済は次のページで行われます
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
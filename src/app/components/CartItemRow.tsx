"use client";
import { CartItemType } from "../types/types";

interface CartItemProps {
    item: CartItemType;
    // onUpdateQuantity: (id: number, change: number) => void;
    // onRemove: (id: number) => void;
}

export default function CartItemRow(props: CartItemProps) {
    const { item } = props

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 rounded-xl shadow-md transition duration-300 hover:shadow-lg">
            <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg mr-4 border border-green-100 flex-shrink-0 mb-4 sm:mb-0" 
                // 画像ロード失敗時のフォールバック
                onError={(e) => { 
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src="https://placehold.co/100x100/CCCCCC/333333?text=No+Image" 
                }}
            />
            
            <div className="flex-grow w-full sm:w-auto">
                <p className="font-semibold text-gray-800 text-lg mb-1">{item.name}</p>
                <p className="text-sm text-green-700">¥{item.price.toLocaleString()} (税込)</p>
                <p className="text-sm text-gray-500 mt-1">小計: ¥{(item.price * item.quantity).toLocaleString()}</p>
            </div>

            <div className="flex items-center space-x-4 mt-3 sm:mt-0 sm:ml-4">
                {/* 数量変更コントロール */}
                <div className="flex items-center border border-green-300 rounded-lg">
                    <button 
                        // onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-2 text-green-700 hover:bg-green-100 rounded-l-lg transition duration-150 disabled:opacity-30"
                        disabled={item.quantity <= 1}
                        aria-label="数量を減らす"
                    >
                        -
                    </button>
                    <span className="px-3 text-gray-700 font-medium select-none">{item.quantity}</span>
                    <button 
                        // onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-2 text-green-700 hover:bg-green-100 rounded-r-lg transition duration-150"
                        aria-label="数量を増やす"
                    >
                        +
                    </button>
                </div>
                
                {/* 削除ボタン */}
                <button 
                    // onClick={() => onRemove(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition duration-150"
                    aria-label="商品を削除"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
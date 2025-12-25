
import React from 'react';
import { CartItem, AppScreen } from '../types';

interface CartScreenProps {
  cart: CartItem[];
  onNavigate: (screen: AppScreen) => void;
  onRemove: (id: string, size: string, color: string) => void;
  onUpdateQuantity: (id: string, size: string, color: string, delta: number) => void;
}

const CartScreen: React.FC<CartScreenProps> = ({ cart, onNavigate, onRemove, onUpdateQuantity }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = cart.length > 0 ? 30000 : 0;
  const discount = cart.length > 0 ? 50000 : 0;
  const total = Math.max(0, subtotal + shipping - discount);

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar">
      {/* Top App Bar */}
      <div className="sticky top-0 z-20 flex items-center bg-background-light dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => onNavigate('home')} className="flex size-12 items-center justify-start">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Giỏ hàng</h2>
        <div className="w-12 flex justify-end">
          <button className="text-primary text-base font-bold">Sửa</button>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="flex w-full flex-col items-center justify-center py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-[20px] fill-1">shopping_bag</span>
            <span className="text-xs font-bold text-primary">Giỏ hàng</span>
          </div>
          <div className="h-[1px] w-8 bg-gray-300"></div>
          <span className="material-symbols-outlined text-gray-400 text-[20px]">local_shipping</span>
          <div className="h-[1px] w-8 bg-gray-300"></div>
          <span className="material-symbols-outlined text-gray-400 text-[20px]">credit_card</span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 flex flex-col gap-4 px-4 pb-32">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <span className="material-symbols-outlined text-6xl mb-4">shopping_cart_off</span>
            <p>Giỏ hàng của bạn đang trống</p>
            <button 
              onClick={() => onNavigate('home')}
              className="mt-4 text-primary font-bold border border-primary px-6 py-2 rounded-xl"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              {cart.map((item, idx) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 bg-white dark:bg-[#1A2633] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="size-[80px] shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <p className="font-bold text-base line-clamp-1">{item.product.name}</p>
                        <button onClick={() => onRemove(item.product.id, item.size, item.color)} className="text-gray-400 hover:text-red-500">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                      <p className="text-text-secondary-light dark:text-gray-400 text-xs mt-1">Size: {item.size} | Màu: {item.color}</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <p className="text-primary text-sm font-bold">{item.product.price.toLocaleString('vi-VN')}₫</p>
                      <div className="flex items-center gap-3 bg-slate-50 dark:bg-background-dark rounded-full p-1 px-2 border border-gray-200 dark:border-gray-700">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.color, -1)}
                          className="flex items-center justify-center size-5 rounded-full bg-white dark:bg-gray-700 shadow-sm"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.color, 1)}
                          className="flex items-center justify-center size-5 rounded-full bg-primary text-white shadow-sm"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Address */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Giao hàng đến</h3>
              <div className="bg-white dark:bg-[#1A2633] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-sm">Nguyễn Văn A <span className="font-normal text-gray-500 ml-1">| 0912345678</span></p>
                    <span className="material-symbols-outlined text-gray-400 text-[18px]">edit</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white dark:bg-[#1A2633] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tạm tính ({cart.reduce((a, b) => a + b.quantity, 0)} sản phẩm)</span>
                <span className="font-semibold">{subtotal.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Phí vận chuyển</span>
                <span className="font-semibold">{shipping.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Giảm giá</span>
                <span className="font-semibold text-green-500">-{discount.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="h-[1px] bg-gray-100 my-1"></div>
              <div className="flex justify-between items-center">
                <span className="text-base font-bold">Tổng thanh toán</span>
                <span className="text-xl font-bold text-primary">{total.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-[#1A2633] border-t border-gray-100 p-4 z-10">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col flex-1">
            <span className="text-xs text-gray-500 font-medium">Tổng cộng</span>
            <span className="text-lg font-bold">{total.toLocaleString('vi-VN')}₫</span>
          </div>
          <button 
            disabled={cart.length === 0}
            className={`px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${cart.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary text-white shadow-lg shadow-blue-500/30 active:scale-95'}`}
          >
            <span>Thanh toán</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default CartScreen;

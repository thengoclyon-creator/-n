
import React, { useState } from 'react';
import { Product, AppScreen } from '../types';

interface ProductDetailScreenProps {
  product: Product;
  onNavigate: (screen: AppScreen) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  cartCount: number;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ product, onNavigate, onAddToCart, cartCount }) => {
  const [selectedSize, setSelectedSize] = useState('40');
  const [selectedColor, setSelectedColor] = useState('Red');

  const sizes = ['38', '39', '40', '41', '42', '43'];
  const colors = [
    { name: 'Red', hex: '#ef4444' },
    { name: 'Black', hex: '#0f172a' },
    { name: 'White', hex: '#f8fafc' }
  ];

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar pb-32">
      {/* TopAppBar */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4">
        <button onClick={() => onNavigate('home')} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back_ios_new</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button onClick={() => onNavigate('cart')} className="flex size-10 items-center justify-center rounded-full relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Main Hero Image */}
      <div className="px-4 pt-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            <div className="h-1.5 w-6 rounded-full bg-primary"></div>
            {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/60"></div>)}
          </div>
          <div className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
            <span className="material-symbols-outlined text-white text-[18px]">zoom_out_map</span>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex overflow-x-auto px-4 py-4 no-scrollbar gap-3">
        {product.thumbnails.map((thumb, idx) => (
          <div key={idx} className={`w-20 shrink-0 rounded-lg border-2 p-0.5 transition-all ${idx === 0 ? 'border-primary' : 'border-transparent opacity-70'}`}>
            <img src={thumb} alt="thumb" className="aspect-square w-full rounded-md object-cover" />
          </div>
        ))}
      </div>

      {/* Headline & Price */}
      <div className="flex flex-col px-4 pt-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-0.5 rounded-md bg-primary/10 px-1.5 py-0.5">
                <span className="material-symbols-outlined text-primary text-[16px] fill-1">star</span>
                <span className="text-sm font-bold text-primary">{product.rating}</span>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 underline decoration-slate-300">({product.reviewCount} Reviews)</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <h2 className="text-3xl font-extrabold text-primary">{product.price.toLocaleString('vi-VN')} ₫</h2>
          {product.originalPrice && (
            <>
              <span className="text-lg text-slate-400 line-through">{product.originalPrice.toLocaleString('vi-VN')} ₫</span>
              <span className="ml-2 rounded-md bg-green-500/10 px-2 py-1 text-xs font-bold text-green-600 dark:text-green-400">-22%</span>
            </>
          )}
        </div>
      </div>

      <div className="h-6 w-full"></div>

      {/* Color Selector */}
      <div className="flex flex-col gap-3 px-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Màu sắc</h3>
        <div className="flex gap-4">
          {colors.map(color => (
            <button 
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`group relative flex size-12 items-center justify-center rounded-full border-2 p-1 transition-all ${selectedColor === color.name ? 'border-primary' : 'border-transparent'}`}
            >
              <div className="h-full w-full rounded-full border border-gray-200" style={{ backgroundColor: color.hex }}></div>
            </button>
          ))}
        </div>
      </div>

      <div className="h-6 w-full"></div>

      {/* Size Selector */}
      <div className="flex flex-col gap-3 px-4">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Kích cỡ (EU)</h3>
          <button className="text-sm font-medium text-primary hover:text-primary/80">Hướng dẫn chọn size</button>
        </div>
        <div className="flex w-full gap-3 overflow-x-auto pb-2 no-scrollbar">
          {sizes.map(size => (
            <button 
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`relative flex h-12 min-w-[3.5rem] items-center justify-center rounded-xl border-2 transition-all ${selectedSize === size ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-slate-200 bg-white text-slate-900 dark:bg-surface-dark dark:border-slate-700 dark:text-white'}`}
            >
              {size}
              {size === '40' && <span className="absolute -top-2 -right-1 flex h-4 items-center justify-center rounded-full bg-primary px-1.5 text-[8px] font-bold uppercase text-white shadow-sm">Hot</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="h-6 w-full"></div>

      {/* Description */}
      <div className="flex flex-col gap-3 px-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Mô tả sản phẩm</h3>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{product.description}</p>
        <button className="text-sm font-bold text-primary hover:underline self-start">Xem thêm</button>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t border-slate-200 bg-white/95 px-4 pb-8 pt-4 backdrop-blur dark:border-slate-800 dark:bg-surface-dark/95 z-50">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">Tổng cộng</span>
            <span className="text-xl font-bold text-slate-900 dark:text-white">{product.price.toLocaleString('vi-VN')} ₫</span>
          </div>
          <button 
            onClick={() => onAddToCart(product, selectedSize, selectedColor)}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/30"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;

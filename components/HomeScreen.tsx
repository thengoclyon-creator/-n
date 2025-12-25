
import React from 'react';
import { AppScreen, Product } from '../types';
import { PRODUCTS } from '../constants';
import BottomNav from './BottomNav';

interface HomeScreenProps {
  onNavigate: (screen: AppScreen, product?: Product) => void;
  cartCount: number;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, cartCount }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar pb-24">
      {/* Top App Bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">foot_bones</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">SneakerStore</h2>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button 
            onClick={() => onNavigate('cart')}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-slate-900 dark:text-white"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 sticky top-[65px] z-30 bg-background-light dark:bg-background-dark">
        <div className="flex w-full items-center rounded-xl bg-white dark:bg-gray-800 shadow-sm h-12 border border-gray-100 dark:border-gray-700">
          <div className="pl-4 text-gray-400">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="flex-1 bg-transparent px-3 py-2 text-base text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none" placeholder="Tìm kiếm Nike, Adidas..." />
          <button className="pr-4 text-gray-400">
            <span className="material-symbols-outlined">mic</span>
          </button>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="mt-2 px-4 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <div 
          className="relative flex h-48 w-80 shrink-0 snap-center flex-col justify-end rounded-2xl bg-cover bg-center overflow-hidden shadow-md"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBA0J64ml-XoTwh3UnyBv9tagsMr3GCAQRgPS-envgPxm7naZmg6OoOADkBjqov0eDoPCgmdijpjgeszOzcHQl5YuGrAbVmFqu9yG8i7jdZalKdw9p2KleU-5UsAYemkkgwzRCHqUA7lx7c2FZSLTHRvfnh1xK59hq1Y9QYwCrhIqXuiQVHbgNqr8kBB7HK_GT6kNc-cHaqYZK41fO75iMSQHPhlABJJq3VaWQ7DT_24XpBKN7U_E3h-93RZGZSaPK7vytE5qyQnODv")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="relative z-10 p-4">
            <span className="inline-block rounded-md bg-primary px-2 py-1 text-xs font-bold text-white mb-2">Mới nhất</span>
            <h3 className="text-xl font-bold text-white">Bộ sưu tập Hè 2024</h3>
            <p className="text-sm font-medium text-gray-200">Giảm tới 50% cho thành viên</p>
          </div>
        </div>
        <div 
          className="relative flex h-48 w-80 shrink-0 snap-center flex-col justify-end rounded-2xl bg-cover bg-center overflow-hidden shadow-md"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlm2s3A10nphCiHmCQjzIWrDcJd0aIcbyNMNd2h8l6m0oE0tkCmLtQ7qH4dhA2hUeIZXsAxb-fewbTuwbVBnFk3ZR2RGKfQiHHO3lKIG9oZHmOUZB5YlaFukcvVeG1DaPBoA81bMjzSp2M7PGK1CqiIjMt-L2uoerIn2FQG-aLRD66VIXltgWXF3mKGpMCAp3sLD6ZFXkXF2LAtIDEfjdkn1BlTv3S3HKrhTRH0XveQpUkFArEZnJ2jzy34JTv1wX3IKp-8-N9Yofv")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="relative z-10 p-4">
            <span className="inline-block rounded-md bg-white/20 backdrop-blur-sm px-2 py-1 text-xs font-bold text-white mb-2 border border-white/30">Chạy bộ</span>
            <h3 className="text-xl font-bold text-white">Vượt mọi giới hạn</h3>
            <p className="text-sm font-medium text-gray-200">Khám phá dòng sản phẩm Pro</p>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-4 flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2">
        <button className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-slate-900 dark:bg-white px-3">
          <span className="material-symbols-outlined text-white dark:text-slate-900 text-[20px]">tune</span>
          <p className="text-white dark:text-slate-900 text-sm font-semibold">Lọc</p>
        </button>
        {['Tất cả', 'Nike', 'Adidas', 'Puma', 'Jordan'].map((brand, idx) => (
          <button 
            key={brand}
            className={`flex h-9 shrink-0 items-center rounded-lg px-3 shadow-sm whitespace-nowrap border ${idx === 1 ? 'bg-primary/10 border-primary/20 text-primary font-semibold' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white'}`}
          >
            <span className="text-sm">{brand}</span>
            {idx === 1 && <span className="material-symbols-outlined ml-1 text-[16px]">close</span>}
          </button>
        ))}
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sản phẩm mới</h3>
        <button className="text-sm font-medium text-primary hover:text-primary/80">Xem tất cả</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 px-4 pb-4">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id}
            onClick={() => onNavigate('productDetail', product)}
            className="group flex flex-col gap-2 rounded-xl bg-white dark:bg-gray-800 p-3 shadow-sm border border-gray-100 dark:border-gray-700/50 transition-all hover:shadow-md cursor-pointer"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
              <div className="absolute right-2 top-2 z-10">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm text-gray-500 dark:text-gray-300">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              {product.tag && (
                <div className="absolute left-2 top-2 z-10">
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide ${product.tag === 'Sale' ? 'bg-red-500' : 'bg-slate-900'}`}>
                    {product.tag}
                  </span>
                </div>
              )}
              <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-white/90 dark:bg-black/70 px-1.5 py-0.5 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[14px] text-yellow-500 fill-1">star</span>
                <span className="text-[10px] font-bold">{product.rating}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">{product.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{product.gender} • {product.category}</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex flex-col leading-none">
                  <span className="text-base font-bold text-primary">{product.price.toLocaleString('vi-VN')}₫</span>
                  {product.originalPrice && (
                    <span className="text-[10px] text-gray-400 line-through">{product.originalPrice.toLocaleString('vi-VN')}₫</span>
                  )}
                </div>
                <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav activeScreen="home" onNavigate={onNavigate} />
    </div>
  );
};

export default HomeScreen;


import React from 'react';
import { AppScreen } from '../types';
import { NEWS } from '../constants';
import BottomNav from './BottomNav';

interface NewsScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const NewsScreen: React.FC<NewsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar pb-24">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="flex items-center justify-between p-4 pb-2">
          <h2 className="text-2xl font-bold flex-1">Tư vấn & Tin tức</h2>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className="flex gap-3 px-4 pb-3 overflow-x-auto no-scrollbar">
          {['Tất cả', 'Xu hướng', 'Hướng dẫn', 'Tin tức'].map((filter, i) => (
            <button key={filter} className={`flex h-9 shrink-0 items-center px-5 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-transparent'}`}>
              {filter}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 space-y-8 pt-4">
        {/* Hero Section */}
        <section className="px-4">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/10] shadow-md group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOhiDRrQliuFhxJG97-L-4k37B-Us8d3_IABLiHmsjA4z9CtDqLOcm73khy4dFMgPMh26ExzP1lLkO3YSZLVPlbEwqJlwH9DiBhGDMHk_HumzvRw0fNczm9BxD3h2ZCgt4Zzbaet-7F8c5oVtzjfQ_vHCxuh5BEDpT4wspFT5J6uC5T9wEVUhFcP0Bu2Fc3mWhhzv4mAEJocWaTRxMtHRIaUlS6VBHYdsJuLFqQ3_P8y0PCV2eK0VWTHtpDvU4hct7098jBJp5Dv7W" 
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" 
              alt="Summer 2024 Trends" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <span className="inline-block px-2 py-0.5 mb-2 rounded bg-primary text-white text-[10px] font-bold uppercase">Mới nhất</span>
              <h2 className="text-white text-2xl font-bold leading-tight">Xu hướng Sneaker 2024</h2>
              <p className="text-gray-300 text-sm line-clamp-1">Khám phá những mẫu giày hot nhất mùa hè này.</p>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Hướng dẫn chọn giày</h3>
            <button className="text-primary text-sm font-semibold flex items-center">
              Xem thêm <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {NEWS.map((item) => (
              <article key={item.id} className="flex gap-4 rounded-xl bg-white dark:bg-gray-800 p-3 shadow-sm border border-gray-100">
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div className="flex flex-col gap-1">
                    <span className={`text-xs font-bold uppercase ${item.category === 'Tips' ? 'text-primary' : 'text-green-500'}`}>{item.category}</span>
                    <h4 className="font-bold text-base leading-snug line-clamp-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs line-clamp-2">{item.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-gray-400 text-[10px] font-semibold uppercase">
                    <span>{item.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <BottomNav activeScreen="news" onNavigate={onNavigate} />
    </div>
  );
};

export default NewsScreen;

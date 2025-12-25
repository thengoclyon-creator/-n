
import React from 'react';
import { AppScreen } from '../types';
import BottomNav from './BottomNav';

interface SupportScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

const SupportScreen: React.FC<SupportScreenProps> = ({ onNavigate }) => {
  const sections = [
    { title: 'Pháp lý', items: [
      { label: 'Chính sách bảo mật', sub: 'Dữ liệu cá nhân của bạn', icon: 'shield', color: 'bg-primary/10 text-primary' },
      { label: 'Điều khoản dịch vụ', sub: 'Quy định sử dụng', icon: 'description', color: 'bg-primary/10 text-primary' }
    ]},
    { title: 'Trung tâm trợ giúp', items: [
      { label: 'Câu hỏi thường gặp', sub: 'Vận chuyển, đổi trả, thanh toán', icon: 'help', color: 'bg-orange-100 text-orange-600' },
      { label: 'Hướng dẫn chọn size', sub: 'Bảng đo kích thước chuẩn', icon: 'straighten', color: 'bg-emerald-100 text-emerald-600' }
    ]}
  ];

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar pb-24">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-100">
        <button onClick={() => onNavigate('home')} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">Hỗ trợ & Chính sách</h2>
      </div>

      <div className="flex-1 pb-8">
        {/* Banner */}
        <div className="px-4 pt-4">
          <div 
            className="relative flex flex-col justify-end overflow-hidden rounded-xl bg-slate-200 min-h-[180px] shadow-sm group"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE05PXgvN-9Z-fDbYWUdZqfVVM7V6sa77Dab7LKikdyK8f41pjk2Nh3uJAQ_IOV85atbEruS8xpYchQxwmIR8E6HkIQnaqkkiBJGN6t9AXCQByryyY0yI5vGTs3fwtr57b6AlIZfx1ClihhP2oGmrNo2SYmr7PBhlsEK2SFLpSWJ-_qWNU4nh8lnghlYiZxoAxxuJiYBH4xi9UCBjmyFk5xpuivMwNGWC8m_0TU7PDUSI7l9iwioeCgNs7qXxoLWRm04IzvK7f2go5")`, backgroundSize: 'cover' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="relative p-5">
              <span className="material-symbols-outlined text-white/90 text-[32px] mb-2">verified_user</span>
              <p className="text-white text-2xl font-bold leading-tight mb-1">Tin tưởng & An toàn</p>
              <p className="text-white/80 text-sm font-medium">Chúng tôi bảo vệ quyền lợi của bạn.</p>
            </div>
          </div>
        </div>

        {/* List Sections */}
        {sections.map(section => (
          <div key={section.title} className="pt-6">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider px-4 pb-2">{section.title}</h3>
            <div className="flex flex-col bg-white dark:bg-slate-900">
              {section.items.map(item => (
                <div key={item.label} className="flex items-center gap-4 px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-all">
                  <div className={`flex items-center justify-center rounded-lg size-10 shrink-0 ${item.color}`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-base">{item.label}</p>
                    <p className="text-slate-500 text-sm">{item.sub}</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Support CTA */}
        <div className="pt-8 px-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-white rounded-full p-1.5 shadow-md shadow-primary/30">
                <span className="material-symbols-outlined text-[20px]">support_agent</span>
              </div>
              <h3 className="font-bold text-lg">Cần hỗ trợ thêm?</h3>
            </div>
            <p className="text-slate-500 text-sm mb-5">Đội ngũ ShoeStore luôn sẵn sàng giải đáp từ 8:00 - 21:00 hàng ngày.</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-200 rounded-lg py-3 px-2">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="text-sm font-semibold">1900-1234</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-200 rounded-lg py-3 px-2">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="text-sm font-semibold">Email</span>
              </button>
            </div>
            <button className="w-full mt-3 bg-primary text-white font-bold rounded-lg py-3 shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">chat</span>
              Chat trực tuyến
            </button>
          </div>
        </div>
      </div>

      <BottomNav activeScreen="support" onNavigate={onNavigate} />
    </div>
  );
};

export default SupportScreen;


import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="flex flex-col h-full bg-white dark:bg-background-dark overflow-y-auto no-scrollbar">
      {/* Header Image Section */}
      <div className="w-full">
        <div 
          className="relative w-full h-[260px] flex flex-col justify-end overflow-hidden bg-cover bg-center rounded-b-[2rem]"
          style={{ 
            backgroundImage: `linear-gradient(180deg, rgba(19, 109, 236, 0) 0%, rgba(16, 24, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwXOlw-iFXuWS4YklmMFJthEhBhdi9P_baUhCA5IxVfpxVX-KPrbm_O3_L2vcmKfKt2wbhy6xIh0ewEvNEl3QBsMEIVMFuAFNmpeyVG_Wkwz5AN_KHJ5c5UrMQ6gifmRtbi3kg_DSxGgSu23T_uwH-ol2uBsrfzoPkZKONBLaUDOTdQUgkIRLN6N7e6j9CmNwl8x46fPPAPgzXVD_ETISE8YOyhs7wpgYYLg6yPUX6j1hDQcyydhzTQ05Q61rF5pVSJny47m-1adY0")` 
          }}
        >
          <div className="p-6 pb-8">
            <h1 className="text-white text-3xl font-extrabold leading-tight mb-1">SneakerHub</h1>
            <p className="text-gray-200 text-sm font-medium opacity-90">Bước chân phong cách của bạn</p>
          </div>
        </div>
      </div>

      {/* Segmented Control */}
      <div className="px-6 py-6">
        <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-100 dark:bg-[#1a2634] p-1">
          <button 
            onClick={() => setMode('login')}
            className={`flex h-full grow items-center justify-center rounded-lg font-bold transition-all duration-200 ${mode === 'login' ? 'bg-white dark:bg-[#2d3b4e] shadow-sm text-primary dark:text-white' : 'text-text-secondary-light dark:text-text-secondary-dark'}`}
          >
            <span className="text-sm">Đăng nhập</span>
          </button>
          <button 
            onClick={() => setMode('register')}
            className={`flex h-full grow items-center justify-center rounded-lg font-bold transition-all duration-200 ${mode === 'register' ? 'bg-white dark:bg-[#2d3b4e] shadow-sm text-primary dark:text-white' : 'text-text-secondary-light dark:text-text-secondary-dark'}`}
          >
            <span className="text-sm">Đăng ký</span>
          </button>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex flex-col gap-5 px-6 pb-6">
        <label className="flex flex-col w-full group">
          <span className="text-text-main-light dark:text-gray-300 text-sm font-semibold mb-2 ml-1">Email hoặc Số điện thoại</span>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-text-secondary-light dark:text-gray-500">mail</span>
            <input 
              className="w-full h-14 pl-12 pr-4 rounded-xl border border-border-light dark:border-border-dark bg-input-bg-light dark:bg-input-bg-dark text-text-main-light dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-base" 
              placeholder="nguyenvan@example.com" 
              type="text"
            />
          </div>
        </label>

        <label className="flex flex-col w-full group">
          <span className="text-text-main-light dark:text-gray-300 text-sm font-semibold mb-2 ml-1">Mật khẩu</span>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-text-secondary-light dark:text-gray-500">lock</span>
            <input 
              className="w-full h-14 pl-12 pr-12 rounded-xl border border-border-light dark:border-border-dark bg-input-bg-light dark:bg-input-bg-dark text-text-main-light dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-base" 
              placeholder="********" 
              type="password"
            />
            <button className="absolute right-4 flex items-center text-text-secondary-light dark:text-gray-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </label>

        <div className="flex justify-end -mt-1">
          <a className="text-primary text-sm font-semibold hover:underline" href="#">Quên mật khẩu?</a>
        </div>

        <button 
          onClick={onLogin}
          className="w-full h-14 mt-2 bg-primary hover:bg-blue-600 active:scale-[0.98] rounded-xl flex items-center justify-center text-white text-base font-bold shadow-lg shadow-blue-500/30 transition-all duration-200"
        >
          {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
        </button>

        <div className="flex items-center gap-4 my-2">
          <div className="h-[1px] flex-1 bg-border-light dark:bg-border-dark"></div>
          <span className="text-text-secondary-light dark:text-gray-500 text-xs font-medium uppercase tracking-wider">Hoặc {mode === 'login' ? 'đăng nhập' : 'đăng ký'} bằng</span>
          <div className="h-[1px] flex-1 bg-border-light dark:border-dark"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center h-14 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-[#1a2634] hover:bg-gray-50 dark:hover:bg-[#253242] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span className="text-text-main-light dark:text-white text-sm font-semibold">Google</span>
          </button>
          <button className="flex items-center justify-center h-14 gap-3 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-[#1a2634] hover:bg-gray-50 dark:hover:bg-[#253242] transition-colors">
            <svg className="w-6 h-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.36-.16-1-.53-1.97-.53s-1.6.36-1.96.53c-1.03.49-2.1.55-3.08-.4C5.17 18.55 3 13.78 6.09 9c1.47-2.28 3.98-2.26 4.88-1.39.27.27.75.7 1.98.7s1.71-.43 1.98-.7c.9-.87 3.41-.89 4.88 1.39 1.54 2.39 1.15 5.6.86 6.37-.41 1.11-1.28 2.61-2.48 4.09-.3.37-.62.82-1.14.82zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.54 4.54-3.74 4.25z"></path>
            </svg>
            <span className="text-text-main-light dark:text-white text-sm font-semibold">Apple</span>
          </button>
        </div>
      </div>

      <div className="mt-auto p-6 pt-0 text-center">
        <p className="text-xs text-text-secondary-light dark:text-gray-500">
          Bằng việc tiếp tục, bạn đồng ý với 
          <a className="text-primary hover:underline ml-1" href="#">Điều khoản dịch vụ</a> và 
          <a className="text-primary hover:underline ml-1" href="#">Chính sách bảo mật</a> của chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;

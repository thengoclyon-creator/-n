
import React, { useState, useCallback, useMemo } from 'react';
import { AppScreen, Product, CartItem } from './types';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import CartScreen from './components/CartScreen';
import NewsScreen from './components/NewsScreen';
import SupportScreen from './components/SupportScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('login');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const navigateTo = useCallback((screen: AppScreen, product?: Product) => {
    if (product) setSelectedProduct(product);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  }, []);

  const addToCart = useCallback((product: Product, size: string, color: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.size === size && item.color === color);
      if (existing) {
        return prev.map(item => item === existing ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1, size, color }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string, size: string, color: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.size === size && item.color === color)));
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, color: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.size === size && item.color === color) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={() => navigateTo('home')} />;
      case 'home':
        return <HomeScreen onNavigate={navigateTo} cartCount={cart.length} />;
      case 'productDetail':
        return selectedProduct ? (
          <ProductDetailScreen 
            product={selectedProduct} 
            onNavigate={navigateTo} 
            onAddToCart={addToCart} 
            cartCount={cart.length}
          />
        ) : null;
      case 'cart':
        return (
          <CartScreen 
            cart={cart} 
            onNavigate={navigateTo} 
            onRemove={removeFromCart} 
            onUpdateQuantity={updateQuantity} 
          />
        );
      case 'news':
        return <NewsScreen onNavigate={navigateTo} />;
      case 'support':
        return <SupportScreen onNavigate={navigateTo} />;
      default:
        return <HomeScreen onNavigate={navigateTo} cartCount={cart.length} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark shadow-2xl relative overflow-hidden flex flex-col">
      {renderScreen()}
    </div>
  );
};

export default App;

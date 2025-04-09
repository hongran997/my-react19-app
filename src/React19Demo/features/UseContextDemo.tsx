import { createContext, use } from 'react';

// 创建一个 Context
const ThemeContext = createContext('light');

function ThemedButton() {
  // 使用 use Hook 获取 Context 值
  const theme = use(ThemeContext);
  
  return (
    <button style={{ 
      background: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333'
    }}>
      当前主题: {theme}
    </button>
  );
}

export default function UseContextDemo() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
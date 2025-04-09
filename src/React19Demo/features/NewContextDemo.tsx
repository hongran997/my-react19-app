import { createContext, use } from "react";

// 创建主题 Context
const ThemeContext = createContext('light');

// 主题按钮组件
function ThemedButton() {
  // 使用 use Hook 获取主题值
  const theme = use(ThemeContext);
  
  return (
    <button
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    >
      当前主题: {theme}
    </button>
  );
}

// 主组件
export default function NewContextDemo() {

  return (
    // 使用新的 Context Provider 语法
    <ThemeContext value="dark">
        <div style={{ padding: '5px' }}>
          <ThemedButton />
          
          {/* 嵌套使用不同的主题 */}
          <div style={{ marginTop: '20px', padding: '16px', border: '1px solid #ccc' }}>
            <h3>嵌套主题</h3>
            <ThemeContext value="light">
              <ThemedButton />
            </ThemeContext>
          </div>
        </div>
    </ThemeContext>
  );
}
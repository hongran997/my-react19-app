import { useRef } from 'react';

// 子组件直接接收 ref 作为 prop
function CustomInput({ label, inputRef }: { 
  label: string;
  inputRef: React.RefObject<HTMLInputElement>; 
}) {
  return (
    <div>
      <label>{label}</label>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default function NewRefDemo() {
  // 创建一个 ref
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div style={{ padding: '5px' }}>      
      {/* 直接将 ref 作为普通 prop 传递 */}
      <CustomInput 
        label="输入框："
        inputRef={inputRef} 
      />
      
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleFocus}>聚焦输入框</button>
        <button 
          onClick={handleReset} 
          style={{ marginLeft: '10px' }}
        >
          重置输入框
        </button>
      </div>
    </div>
  );
}
import { useRef } from "react"

export default function RefCleanupDemo() { 
  const inputRef = useRef<HTMLInputElement>(null);

  const setRef = (element: HTMLInputElement | null) => {
    if (element) {
      element.focus();
      const handleKeyPress = (e: KeyboardEvent) => { 
        if (e.key === 'Enter') { 
          console.log('Enter pressed:', element.value);
        }
      }

      element.addEventListener('keypress', handleKeyPress);

      return () => { 
        console.log('Cleanup ref:', element.value);
        element.removeEventListener('keypress', handleKeyPress);
      }
    }
  }

  return (
    <div style={{ padding: '5px' }}>
      <input 
        ref={setRef}
        type="text" 
        placeholder="按回车键测试"
        style={{
          padding: '8px',
          margin: '10px 0',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  )
}
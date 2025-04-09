import { useState, useTransition } from 'react';

export default function TransitionDemo() { 
    const [input, setInput] = useState('');
    const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  
  const searchAPI = async (searchTerm: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Array(10).fill(searchTerm).map((item, index) => `${item} ${index}`);
  }
  
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInput(value);
      // startTransition 是一个函数，用来标记一个状态更新为过渡状态
      startTransition(async () => { 
        const list = await searchAPI(value);
        // 这里的 setList 是一个过渡状态更新，React 会在空闲时间更新这个状态
        setList(list);
      })
    }
  
    return (
      <div>
        <input type="text" onChange={ handleChange}></input>
        <div>
          { 
            isPending ? <p>loading</p> : <ul>
              { 
                list.map((item, index) => (<li key={index}> { item}</li>))
              }
            </ul>
          }
        </div>
      </div>
    )
}
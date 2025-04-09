import { use, Suspense } from 'react';

// 模拟一个异步数据获取函数
async function fetchUserData(userId: string) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`
  };
}

// 创建一个异步组件
function UserProfile({ userId }: { userId: string }) {
  // 使用 use Hook 直接处理 Promise
  const userData = use(fetchUserData(userId));

  return (
    <div className="user-profile">
      <h2>用户信息</h2>
      <p>ID: {userData.id}</p>
      <p>姓名: {userData.name}</p>
      <p>邮箱: {userData.email}</p>
    </div>
  );
}

// 主组件
export default function UseHookDemo() {
  return (
    <div>
      <h1>Use Hook 示例</h1>
      <Suspense fallback={<p>加载中...</p>}>
        <UserProfile userId="123" />
      </Suspense>
    </div>
  );
}
import TransitionDemo from './features/TransitionDemo';
import UseIdDemo from './features/UseIdDemo';
import UseDeferredValueDemo from './features/UseDeferredValueDemo';
import NewRefDemo from './features/NewRefDemo';
import NewContextDemo from './features/NewContextDemo';
import RefCleanupDemo from './features/RefCleanupDemo';
import DynamicMetadataDemo from './features/DynamicMetadataDemo';
import StyleLinkDemo from './features/StyleLinkDemo';
import NestedJSDemo from './features/NestedJSDemo';
import ErrorDemo from './features/ErrorDemo';

const React18Demo = () => { 
  return (
    <div>
      <section>
        <h3>1. useTransition Hooks 改进</h3>
        <TransitionDemo />
      </section>
      <section>
        <h3>2. useId() 改进</h3>
        <UseIdDemo />
      </section>
      <section>
        <h3>3. useDeferredValue 升级- 初始值</h3>
        <UseDeferredValueDemo />
      </section>
      <section>
        <h3>4. ref 作为 prop</h3>
        <NewRefDemo />
      </section>
      <section>
        <h3>5. 新的 Context Provide语法</h3>
        <NewContextDemo />
      </section>
      <section>
        <h3>6. Ref Cleanup 示例</h3>
        <RefCleanupDemo />
      </section>
      <section>
        <h3>7. 动态元数据标签支持</h3>
        <DynamicMetadataDemo />
      </section>
      <section>
        <h3>8. 样式表插入到组件里</h3>
        <StyleLinkDemo />
      </section>
      <section>
        <h3>9. Script表内置到组件里</h3>
        <NestedJSDemo />
      </section>
      <section>
        <h3>10. Error 优化</h3>
        <ErrorDemo />
      </section>
    </div >
  )
}

export default React18Demo; 
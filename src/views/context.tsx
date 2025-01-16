import { Heading1 } from "../component/heading";
import { Heading2 } from "../component/heading";
import { Heading3 } from "../component/heading";
import { SectionNormal } from "../component/section";
import { SectionContext } from "../component/section";
import { SectionContextSimplify } from "../component/section";

// 传统方式
export const Page = () => {
  return (
    <SectionNormal>
      <Heading1 level={1}>一级标题</Heading1>
      <SectionNormal>
        <Heading1 level={2}>二级标题</Heading1>
      </SectionNormal>
      <Heading1 level={3}>三级标题</Heading1>
      <Heading1 level={4}>四级标题</Heading1>
      <Heading1 level={5}>五级标题</Heading1>
      <Heading1 level={6}>六级标题</Heading1>
    </SectionNormal>
  );
};

// 使用 context
export const PageContext = () => {
  return (
    <SectionContext level={1}>
      <Heading2>一级标题</Heading2>
      <Heading2>我也是一级标题</Heading2>
      <SectionContext level={2}>
        <Heading2>二级标题</Heading2>
        <Heading2>我们都一样</Heading2>
      </SectionContext>
    </SectionContext>
  );
};

// context 有一个特性，会自动读取外层的 context ，所以可以进一步简化逻辑
export const PageContextSimplify = () => {
  return (
    <SectionContextSimplify>
      <Heading3>简化一级标题</Heading3>
      <SectionContextSimplify>
        <Heading3>简化二级标题</Heading3>
        <SectionContextSimplify>
          <Heading3>简化三级标题</Heading3>
        </SectionContextSimplify>
      </SectionContextSimplify>
    </SectionContextSimplify>
  );
};

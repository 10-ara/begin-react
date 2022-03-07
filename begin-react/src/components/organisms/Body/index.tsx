import { FC, useState } from "react";
import { Counter } from "src/components/molecules/Counter";
import { TagArea, TagList } from "src/components/molecules/TagArea";
import styled from "styled-components";

export const Body: FC = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const [tag, setTag] = useState<string[]>([]);
  const handleClearTag = () => setTag([]);
  const handlePushTag = (addTag: string) => {
    if (tag.some(t => t === addTag)) {
      const tmpTag: string[] = tag.filter(t => t !== addTag);
      setTag(tmpTag);
    } else {
      const tmpTag: string[] = [...tag, addTag];
      setTag(tmpTag);
    }
  };

  const tagList: TagList = [
    { id: "tag1", value: "React" },
    { id: "tag2", value: "Vue.js" },
    { id: "tag3", value: "Angular" },
    { id: "tag4", value: "Next.js" },
    { id: "tag5", value: "Nuxt.js" },
    { id: "tag6", value: "jQuery" },
    { id: "tag7", value: "Gatsby.js" }
  ];
  return (
    <StWrapper>
      <StContent>react初心者向け講座</StContent>
      <StContent>
        カウント
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        タグ
        <TagArea
          tag={tag}
          tagList={tagList}
          handleClearTag={handleClearTag}
          handlePushTag={handlePushTag}
        />
      </StContent>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 16px;
  width: 100%;
  height: 1000px;
`;
const StContent = styled.p`
  color: rgb(34, 34, 34);
  background-color: rgb(255, 255, 255);
  padding: 16px;
  border: 1px solid rgb(34, 34, 34);
  border-radius: 3px;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
`;

import { FC } from "react";
import styled from "styled-components";

export type TagList = { id: string; value: string }[];

type Props = {
  tag: string[];
  tagList: TagList;
  handleClearTag: () => void;
  handlePushTag: (addTag: string) => void;
};

export const TagArea: FC<Props> = ({
  tag,
  tagList,
  handleClearTag,
  handlePushTag
}) => {
  return (
    <StWrapper>
      <StSelectedTagAreaWrapper>
        <StSelectedTagArea>
          {tag.map(t => (
            <StTag key={t}>{t}</StTag>
          ))}
        </StSelectedTagArea>
        <div onClick={handleClearTag}>×</div>
      </StSelectedTagAreaWrapper>
      <StSelectAreaWrapper>
        <StSelectArea>
          {tagList.map(t => (
            <StSelectText key={t.value} onClick={() => handlePushTag(t.value)}>
              {t.value}
            </StSelectText>
          ))}
        </StSelectArea>
      </StSelectAreaWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div``;

const StSelectedTagAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StSelectedTagArea = styled.ul`
  display: flex;
`;

const StTag = styled.li`
  background-color: rgb(27, 161, 255);
  color: #fff;
  border-radius: 24px;
  margin-right: 8px;
  font-size: 12px;
  height: 24px;
  width: 64px;
  line-height: 24px;
  text-align: center;
`;

const StSelectAreaWrapper = styled.div`
  margin-top: 16px;
  border: 1px solid;
  padding: 0 8px;
  font-size: 14px;
`;
const StSelectArea = styled.ul`
  display: flex;
`;

const StSelectText = styled.li`
  margin-right: 8px;
`;

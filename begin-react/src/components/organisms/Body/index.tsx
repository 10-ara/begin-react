import { FC } from "react";
import styled from "styled-components";

export const Body: FC = () => {
  return (
    <StWrapper>
      <StContent>react初心者向け講座</StContent>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 16px;
  width: 100%;
  height: 400px;
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

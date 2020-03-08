import styled from "styled-components";

export const Wrapper = styled.div`
  width: 153px;
  height: 153px;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  display: flex;
  flex-wrap: wrap;
`;

export const Squeare = styled.div`
  width: 50px;
  height: 50px;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

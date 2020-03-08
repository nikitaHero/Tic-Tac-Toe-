import styled from "styled-components";
import ArrowIcon from "static/img/arrow.png";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const InfoItem = styled.div`
  margin-top: 15px;
  :first-child {
    margin-top: 0px;
  }
`;
export const Steps = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
`;
export const Step = styled.div`
  position: relative;
  cursor: pointer;
  color: ${({ active }) => (active ? "black" : "grey")};
  ::after {
    content: "";
    height: 14px;
    width: 40px;
    background: center / contain no-repeat url(${ArrowIcon});
    position: absolute;
    right: -45px;
    transform: rotate(180deg);
    top: calc(50% - 7px);
  }
  :first-child {
    margin-right: 15px;
    ::after {
      left: -45px;
      transform: rotate(0deg);
      top: calc(50% - 7px);
    }
  }
`;

export const NewGameBtn = styled.div`
  font-weight: bold;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

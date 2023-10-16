import { FC } from "react";
import styled from "styled-components";
import { device } from "./breakpoints";

interface SectionHeaderProps {
  title: string;
  name: string;
}

const Wrapper = styled.div`
  gap: 12px;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 80px 0;

  ${device.xl} {
    padding: 120px 0;
  }
`;

const Name = styled.div`
  font-size: 20px;
  text-transform: uppercase;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;

  ${device.xs} {
    font-size: 42px;
  }
`;

export const SectionHeader: FC<SectionHeaderProps> = ({ title, name }) => {
  return (
    <Wrapper className="animated__animate animate__fadeIn reveal">
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Wrapper>
  );
};

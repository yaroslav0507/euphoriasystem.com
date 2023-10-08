import { FC } from "react";
import styled from "styled-components";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const Wrapper = styled.div`
  gap: 12px;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 80px 12px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  text-transform: uppercase;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
`;

export const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Wrapper>
  );
};

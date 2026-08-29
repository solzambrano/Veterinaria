import styled, { keyframes } from "styled-components";
const pulse = keyframes`
  0%, 100% {
    background-color: #e99ed6fa;
    color: #d858d22f;
  }

  50% {
   opacity: 0.6;
   color:#d858d22f;
  }
`;
export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
  align-items: center;
  max-width: 80rem;
  margin: auto;
  margin-top: 35px;
`;
export const Icon = styled.img`
  filter: ${({ $filter }) => $filter || "none"};
  vertical-align: center;
  margin-right: 5px;
`;
export const ParagraphDescription = styled.p``;
export const SectionInfo = styled.section``;
export const Available = styled.span`
  border-radius: 15px;

  border: 1px solid pink;
  padding: 5px 20px;

  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  animation: ${pulse} 2.5s ease-in-out infinite;
`;
export const Title = styled.h1`
  font-size: 4.5rem;
  margin: 0px;
`;
export const SectionImage = styled.section``;
export const SpanTitle = styled.span`
  color: ${({ $color }) =>
    $color === "normal" ? "var(--color-Black)" : "var(--color-Green-s)"};
`;
export const LinkLeft = styled.a``;
export const LinkRight = styled.a``;
export const ImageContainer = styled.div``;
export const Image = styled.img``;
export const Paragraph = styled.p``;
export const Subtitle = styled.h2``;
export const ExtraInfo = styled.div``;

import styled, { keyframes } from "styled-components";
import { sectionVariants } from "../Variants";
console.log(sectionVariants);

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
  margin: 0;
  margin: auto;
  padding: 96px;
`;
export const Icon = styled.img`
  filter: ${({ $filter }) => $filter || "none"};
  vertical-align: center;
  margin-right: 5px;
  width: 20px;
`;
export const ContainerLinks = styled.div`
  display: flex;
`;
export const ParagraphDescription = styled.p``;
export const SectionInfo = styled.section``;
export const Available = styled.span`
  border-radius: 15px;
  color: ${({ $variant }) => sectionVariants[$variant].color};
  background-color: ${({ $variant }) => sectionVariants[$variant].background};
  border: ${({ $variant }) => sectionVariants[$variant].border ?? "none"};
  padding: 5px 20px;

  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  // animation: ${pulse} 2.5s ease-in-out infinite;
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
export const LinkLeft = styled.div``;
export const LinkRight = styled.div``;
export const ImageContainer = styled.div`
  width: 50rem;
  height: 35rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Paragraph = styled.p``;
export const Subtitle = styled.h2``;
export const ExtraInfo = styled.div``;

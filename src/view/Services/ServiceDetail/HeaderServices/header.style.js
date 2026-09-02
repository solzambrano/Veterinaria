import styled, { css, keyframes } from "styled-components";
import { sectionVariants } from "../Variants";
import { Link } from "react-router-dom";

console.log(sectionVariants.urgent);
const pulse = keyframes`
  50% {
    opacity: 0.5;
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
  transition: ${({ $variant }) =>
    sectionVariants[$variant]?.transition ?? "none"};

  transform: ${({ $variant }) =>
    sectionVariants[$variant]?.transform ?? "none"};

  &:hover {
    transform: ${({ $variant }) =>
      sectionVariants[$variant]?.transform_hover ??
      sectionVariants[$variant]?.transform ??
      "none"};
  }
`;
export const ContainerLinks = styled.div`
  display: flex;
  margi-top: 2rem;
  gap: 1rem;
`;
export const ParagraphDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.625;
  margin-top: 2rem;
`;
export const SectionInfo = styled.section``;
export const Available = styled.span`
  border-radius: 15px;
  color: ${({ $variant }) => sectionVariants[$variant].color};
  background-color: ${({ $variant }) => sectionVariants[$variant].background};
  border: ${({ $variant }) => sectionVariants[$variant].border ?? "none"};
  padding: 0.5rem 1rem;
  ${({ $variant }) =>
    sectionVariants[$variant].animation &&
    css`
      animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    `};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  line-height: 1.25rem;
`;
export const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 1.1;
  margin: 0px;
  font-weight: 900;
  margin-top: 2rem;
`;
export const SectionImage = styled.section``;
export const SpanTitle = styled.span`
  color: ${({ $color }) =>
    $color === "normal" ? "var(--color-Black)" : "var(--color-Green-s)"};
`;
export const LinkLeft = styled(Link)`
  text-decoration: none;
`;
export const LinkRight = styled(Link)`
  font-weight: 700;
  line-height: 1.75rem;
  padding: 1.25rem 2rem;
  text-decoration: none;
  color: ${({ $variant }) => sectionVariants[$variant].color};
  background-color: ${({ $variant }) => sectionVariants[$variant].background};
  border-radius: ${({ $variant }) => sectionVariants[$variant].border_r};

  display: flex;
  gap: 0.75rem;
`;
export const ImageContainer = styled.div`
  width: 45rem;
  height: 30rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Paragraph = styled.p``;
export const Subtitle = styled.h2``;
export const ExtraInfo = styled.div``;

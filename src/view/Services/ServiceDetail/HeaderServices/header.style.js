import styled, { css, keyframes } from "styled-components";
import {
  imageVariants,
  additionalVariants,
  buttonVariants,
  headerVariants,
} from "../Variants";
import { Link } from "react-router-dom";

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
  margin-left: auto;
  margin-right: auto;
`;
export const SpanContent = styled.div`
  border-radius: 15px;
  background-color: ${({ $variant }) => headerVariants[$variant].background};
  border: ${({ $variant }) => headerVariants[$variant].border ?? "none"};
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  ${({ $variant }) =>
    headerVariants[$variant].animation &&
    css`
      animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    `};
`;
export const Icon = styled.img`
  filter: ${({ $filter }) => $filter || "none"};
  vertical-align: center;
  margin-right: 5px;
  width: 25px;
  transition: ${({ $variant }) =>
    buttonVariants[$variant]?.transition ?? "none"};

  transform: ${({ $variant }) => buttonVariants[$variant]?.transform ?? "none"};

  &:hover {
    transform: ${({ $variant }) =>
      buttonVariants[$variant]?.transform_hover ??
      buttonVariants[$variant]?.transform ??
      "none"};
  }
`;
export const Span = styled.span`
  color: ${({ $variant }) => headerVariants[$variant]?.color};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  line-height: 1.25rem;
`;
export const Title = styled.h1`
  font-size: ${({ $variant }) => headerVariants[$variant]?.size};
  line-height: 1.1;
  margin: 0px;
  font-weight: 900;
  margin-top: 2rem;
`;
export const SpanTitle = styled.span`
  color: ${({ $color }) =>
    $color === "normal" ? "var(--color-Black)" : "var(--color-Green-s)"};
`;
export const ParagraphDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.625;
  margin-top: 2rem;
`;
export const ContainerLinks = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
  align-items: center;
`;
export const LinkRight = styled(Link)`
  font-weight: 700;
  line-height: 1.75rem;
  padding: 1.25rem 2rem;
  text-decoration: none;
  color: ${({ $variant }) => buttonVariants[$variant].color};
  background-color: ${({ $variant }) => buttonVariants[$variant].background};
  border-radius: ${({ $variant }) => buttonVariants[$variant].border};
  display: flex;
  gap: 0.75rem;
`;
export const LinkLeft = styled(Link)`
  text-decoration: none;
  color: ${({ $variant }) => buttonVariants[$variant].color};
  border: ${({ $variant }) => buttonVariants[$variant].border};
  font-weight: ${({ $variant }) => buttonVariants[$variant].weight};
  font-size: ${({ $variant }) => buttonVariants[$variant].size};
  line-height: ${({ $variant }) => buttonVariants[$variant].line};
  box-shadow: ${({ $variant }) => buttonVariants[$variant].shadow};
  width: fit-content;
  max-width: 11rem;
  padding: 1rem 2rem;

  &:hover {
    background-color: ${({ $variant }) => buttonVariants[$variant].hover};
  }
`;
export const SectionInfo = styled.section`
  box-sizing: border-box;
`;

export const SectionImage = styled.section`
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 38rem;
  height: 31rem;
  z-index: 100;
  position: relative;
  border: ${({ $variant }) => imageVariants[$variant].border};
  border-radius: 45px;
  box-shadow: ${({ $variant }) => imageVariants[$variant].shadow};
  transition: ${({ $variant }) =>
    imageVariants[$variant]?.transition ?? "none"};
  transform: ${({ $variant }) => imageVariants[$variant]?.transform ?? "none"};

  &::before {
    content: "";
    position: absolute;
    inset: -10px;
    background-color: ${({ $variant }) => imageVariants[$variant].background};
    border-radius: 1rem;
    transition: ${({ $variant }) =>
      imageVariants[$variant]?.transition ?? "none"};
    transform: ${({ $variant }) =>
      imageVariants[$variant]?.background_form ?? "none"};
    z-index: -1;
  }

  &:hover::before {
    transform: ${({ $variant }) =>
      imageVariants[$variant]?.background_hover ??
      imageVariants[$variant]?.background_for ??
      "none"};
  }
  &:hover {
    transform: ${({ $variant }) =>
      imageVariants[$variant]?.transform_hover ??
      imageVariants[$variant]?.transform ??
      "none"};
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 45px;
`;
export const ExtraInfo = styled.div`
  padding: 1.5rem;
  border-radius: 1.5rem;
  max-width: 240px;
  position: absolute;
  background-color: ${({ $variant }) =>
    additionalVariants[$variant]?.background ?? "none"};
  box-shadow: ${({ $variant }) =>
    additionalVariants[$variant]?.shadow ?? "none"};
  border-color: ${({ $variant }) =>
    additionalVariants[$variant]?.border ?? "none"};
  bottom: -1.75rem;
  left: -1.75rem;
  box-sizing: border-box;
`;
export const Heading = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${({ $variant }) => additionalVariants[$variant].color};
`;
export const Subtitle = styled.h2`
  font-size: 1rem;
`;
export const Paragraph = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
`;

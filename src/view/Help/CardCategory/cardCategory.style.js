import styled from "styled-components";
export const ContainerCategory = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Category = styled.div`
  border: 1px solid var(--green-50-solid);
  margin: 0px 15px;
  text-align: center;
  padding: 15px 0px;
  border-radius: 20px;
  width: 250px;
  background-image: var(--gradient-green-soft);
  &:hover {
    box-shadow: 0 4px 8px var(--teal-soft);
    background-image: var(--gradient-green-soft);
  }
`;
export const ImageCategory = styled.img`
  width: 20px;
`;
export const TitleCategory = styled.h3`
  pointer-events: none;
`;

import styled from "styled-components";

export const ContainerSeeker = styled.div`
  text-align: center;
  width: 50%;
  border: 1px solid var(--beige-200);
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 12px;
`;
export const SearchSeeker = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 15px;
`;

export const ButtonSeeker = styled.button`
  background-color: var(--color-primary);
  color: var(--color-text);
  width: 70px;
  height: 100%;
  border-radius: 10px;
  border: none;
  font-weight: bold;
`;
export const InputSeeker = styled.input`
  width: 85%;
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--gray-500);
`;

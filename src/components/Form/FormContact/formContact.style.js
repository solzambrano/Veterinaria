import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  height: 60%;
`;
export const Label = styled.label`
  display: inline-block;
  box-sizing: border-box;
  margin-right: 40px;
  width: 100%;
`;
export const ContainerLabel = styled.div`
  display: flex;
  padding-bottom: 25px;
  gap: 1.5rem;
`;
export const Input = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  color: var(--gray-500);
  line-height: 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0px;
  height: 150px;
  border: none;
  resize: none;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--gray-500);
  padding: 15px;
  line-height: 1.5rem;

  min-height: 9rem;
`;

export const ButtonSend = styled.button`
  background-color: var(--color-primary);
  width: 50%;
  height: 10%;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding-left: 1.5rem;
  line-height: 1.5rem;
  padding-right: 1.5rem;
  letter-spacing: 0.015rem;
  margin: auto;
  display: block;
  margin-top: 25px;
`;

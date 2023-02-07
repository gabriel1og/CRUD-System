import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 250px;
    gap: 40px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;

    @media (max-width: 500px) { 
      gap: 30px;
      max-height: 400px;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;
  width: 100%;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 90%;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  margin: 0 auto;
  cursor: pointer;
  font-size: 16px; 
  color: #fff; 
  background-image: radial-gradient(circle, #0f336a, #0a2b57, #092345, #091b34, #081323); 
  padding: 10px 50px; 
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 5px;
  transition : .8s all ease;
  transform: translateY(0);
  border: 1px solid #091b34;

  &:hover {
    transform : translateY(4px);
    color: #091b34;
    background-image: radial-gradient(circle,#dee2ed,#e7eef5,#d8e3ef,#d8ddef,#e8eaf1); 
    
  }
`;
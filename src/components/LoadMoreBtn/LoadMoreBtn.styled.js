import styled from "styled-components";

export const LoadMoreStyled = styled.button`
  font-size: 18px;
  line-height: 24px;
  margin: 0 auto;
  padding: 8px ;
  text-align: center;
  border: 0;
  border-radius: 8px;  
  color: #fff;
  background-color: #3f45b5;  
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);      
    }
` 
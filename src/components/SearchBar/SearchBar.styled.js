import styled from "styled-components";

export const Searchbar = styled.div`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  border-radius: 6px;  
  overflow: hidden;  
`
export const SearchBtn = styled.button`

  width: 100px;
  height: 28px;
  border: 0;
  border-radius: 6px; 
  color:  #3f51b5;    
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none; 

  &:hover{
    opacity: 1; 
  }
`

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding-left: 8px;
  padding-right: 4px; 

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`
// export const FilterLabel = styled.label`
//     width: 300px;   
//     display: flex;
//     flex-direction: column;
//     gap:${p => p.theme.spacing(2)};    
// `
// export const FilterInput = styled.input`     
//     padding: ${p => p.theme.spacing(3)};
//     border: 1px solid ${p => p.theme.colors.secondaryColor};
//     border-radius: ${p => p.theme.radius.m} ;
//     outline: transparent; 
// `
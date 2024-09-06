import styled from "styled-components";

export const Button=styled.button<{primary?: boolean; }>`
  padding: 6px 16px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin:5px;
  border-radius:6px;
  ${(props)=>
      props.primary ? 'background-color:crimson' : 'background-color:seagreen'
   };
  &:hover {
    background-color: darkblue;
  }
`

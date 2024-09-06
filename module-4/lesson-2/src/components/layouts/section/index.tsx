import styled from "styled-components";


export const Section =styled.section<{ bg : string; }>`
    width:100vh;
    height:auto;
    background-color:${(p)=> p.bg ? p.bg : "#000012"};
    padding:40px;
`
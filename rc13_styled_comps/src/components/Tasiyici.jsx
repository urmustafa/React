import styled from "styled-components";

export const Tasiyici=styled.div`
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({bg})=>bg||"tranparent"};
    gap: 1rem;
    width:50vw ;
    margin: auto;
`
import styled from "styled-components";

export const Button= styled.button`
    /* background-color:hotpink; */
    background-color: ${(props)=>{return(props.primary?"blue":"hotpink")}};
    color: white;
    width: 8rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 2px solid hotpink;
    border-color: hotpink;
    font-size: 1.1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    &:hover{
        transform: scale(0.98);
    }
`

export const MtayyarButton=styled(Button)`
    background-color: ${({react})=>react?"red":"green"};
`
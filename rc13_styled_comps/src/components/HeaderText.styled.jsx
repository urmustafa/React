import styled from "styled-components";

const HeaderText=styled.h1`
    color: ${({color})=>color||"black"};
    font-size: 2rem;
    text-align: center;
    background-color: ${({bgRenk})=>bgRenk||"black"};
`
export default HeaderText
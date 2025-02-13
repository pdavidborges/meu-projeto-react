import styled from "styled-components";

export const StyledTask = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #CCCCCC;
    color: #666666;

    button{
        background: transparent;
        border: none;
        color: #FF5555;
        font-size: 30px;
        cursor: pointer;

        &:hover{
            color: #ff0000;
        }
    }
`

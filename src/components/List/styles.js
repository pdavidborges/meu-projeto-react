import styled from "styled-components";

export const StyledList = styled.div `
    background-color: #ffffff;
    max-width: 600px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #dddddd;
    margin: 40px auto; //centraliza a div
    box-sizing: border-box;    

    form{
        display: flex;
        justify-content: space-between;

        input{
            flex-grow: 1;
            height: 54px;
            border-radius: 5px;
            border: solid 1px #cccccc;
            box-sizing: border-box;
            padding: 10px;
        }

        button{
            background-color: #001D29;
            color: #ffffff;
            border: none;
            width: 105px;
            margin-left: 10px;
            border-radius: 5px;
            cursor: pointer;

            &:hover{
                background-color: black;
            }

            &:disabled{
                background-color: #666666;
                opacity: 0.5;
            }
        }       
    }
`
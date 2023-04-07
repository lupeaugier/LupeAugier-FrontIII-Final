import styled, { css } from "styled-components";

export const FormContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: 2px solid ${({ bdColor }) => bdColor};
    border-radius: 10px;
    ${({ from }) => from === "form" && css`
        width: 420px;
        height: 400px;
    `
}`;



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    ${( { content }) => content === "evenly" && css`
        justify-content: space-evenly;
        width: 100vw;
        height: 100vh;
        flex-direction: row;
    `}
    
    ${({ content }) => content === "row" && css`
    width: 100%;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
`}
`;

export const Button = styled.button`
    width: 50%;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 7px;
    background-color: ${({ btn }) => btn === "submit" ? "#BAD7E9" : "#F48484"};
    ${({ btn }) => btn === "submit" && css`
    color: #2B3467;
    &:hover{    
        color: #eee;
        background-color: #2B3467;
    }
`}
    ${({ btn }) => btn === "cancel" && css`
    color: white;
    &:hover{
        background-color: #F55050;
    }
`}
    &:active{
    transform: scale(.9);
}
`;

export const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #4E6E81;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 40px;
`;

export const Error = styled.p `
    color: #C70039;
    font-size: "10px"; 
    padding: 1px;
    margin: 1px 0 0 6px; 
    font-style: italic;xs
    font-family: monospace;
`;
import styled from "styled-components"

export const Div = styled.div`
    margin-left: 7rem;

    background: black;
    color: white;

    display: grid;
    grid-template-columns:  400px 1fr;

    .details{
        display: flex;
        flex-direction: column;
        margin: 5rem;

        max-width: 60%;
    }

    img{
        width: 300px;
        border-radius: 8px;
        margin: 5rem;

    }

    button{
        width: 200px;
        height: 35px;

        border-radius: 8px;

        color: white;
        background: #3B9AE1;

        cursor: pointer;
    }

    button:hover{
        filter: brightness(1.2);
    }
`

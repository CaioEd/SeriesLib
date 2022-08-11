import styled from 'styled-components'

export const Container = styled.div`
    h1{
        text-align: center;
        margin: 2rem auto;

        background-color: red;
        width: 13rem;

        border-radius: 10px;
    }

    ul{
        margin-top: 2rem;

        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img{
        width: 200px;
        border-radius: 8px;
        margin-bottom: 1rem;
    }

    span{
        font-weight: bold;
        font-size: 18px;
    }

    a{
        transition: all 0.2s;
    }

    a:hover{
        transform: scale(1.05)
    }

`
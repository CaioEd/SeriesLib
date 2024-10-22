import styled from 'styled-components'

export const Container = styled.div`
    h1{
        text-align: center;
        margin: 2rem 2rem 2rem 2rem;

        background-color: rgb(255, 217, 79);
        color: black;
        width: 11rem;

        border-radius: 10px;
    }

`

export const SeriesList = styled.ul`
    margin-top: 2rem;

    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 6rem;
    row-gap: 6rem;
`

export const Series = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 200px;
        border-radius: 8px;
        margin-bottom: 1rem;
    }

    span{
        text-align: center;
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
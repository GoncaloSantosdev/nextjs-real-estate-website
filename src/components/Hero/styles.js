import styled from "styled-components";

export const StyledHero = styled.section`  
    background-image: url('https://images.unsplash.com/photo-1634907426139-81ce6e8af753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80');
    height: 100vh;
    width: 100%;
    background-position: center center;
    object-fit: cover;
`

export const StyledHeroContent = styled.div`
    height: 100vh;
        
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: var(--white);

    h1{
        font-size: 2.5rem;
    }

    p{
        margin-top: 1rem;
    }

    .hero__content-cta{
        margin-top: 2rem;
        display: none;

        button{
            margin: 0 1rem;
        }

        @media screen and (min-width: 960px) {
            display: inline;
        }
    }

    .hero__content-form{
        padding: 2rem 2rem;
        border-radius: 5px;
        margin-top: 1rem;
        display: none;

        @media screen and (min-width: 960px) {
            display: flex;
            align-items: center;
        }

        input{
            padding: 1rem 1.5rem;
            width: 200px;
            border: none;
            border-radius: 5px;
            margin: 0 1rem;
        }
    }
`
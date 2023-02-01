import styled from "styled-components";

export const StyledTeamContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;

    @media screen and (min-width: 960px) {
        grid-template-columns: repeat(4, 1fr);        
    }
`

export const StyledTeamContentCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        border-radius: 50%;
        object-fit: cover;

        @media screen and (min-width: 960px) {
            width: 150px;
            height: 150px;
        }
    }

    .team__content-info{
        margin-top: 1rem;

        p{
            font-size: 0.875rem;

            @media screen and (min-width: 960px) {
                font-size: 1rem;
            }
        }

        .desc{
            margin-top: .5rem;
        }

        hr{
            margin: .2rem 0;

            @media screen and (min-width: 960px) {
                margin: .5rem 0;
            }
        }
        
        .phone{
            display: flex;
            align-items: center;
            justify-content: flex-start;

            svg{
                margin-right: 1rem;
            }
        }
    }
`
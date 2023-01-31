import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    position: absolute;
`

export const StyledNav = styled.nav`
    margin-top: 1.875rem;
    padding: 1.875rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #EDEDED;
    border-radius: 5px;

    @media screen and (min-width: 960px) {
        padding: 1.875rem 2rem;
    }

    .header__logo{
        display: flex;
        align-items: center;

        a{
            color: var(--blue);
        }

        h3{
            margin-left: 0.875rem;
            font-weight: 500;
        }
    }

    .header__icons{
        cursor: pointer;
        color: var(--blue);
        height: 18px;

        @media screen and (min-width: 960px) {
            display: none;
        }
    }

    .header__menu-mobile{
        position: absolute;
        top: 8rem;
        right: 1.5rem;
        padding: 1rem;

        background: #FFFFFF;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        z-index: 99;

        li{
            &:not(:first-child){
                margin-top: 0.25rem;
            }
        }

        a{
            color: var(--blue);
            font-size: 0.9rem;
        }

        @media only screen and (min-width: 960px) {
            display: none;
        }
    }

    .header__menu{
        display: none;
        
        @media screen and (min-width: 960px) {
            display: flex;
            
            li{
                &:not(:last-child){
                    margin-right: 2rem;
                }
            }

            a{
                color: var(--blue);
                font-size: 0.95rem;

                :hover{
                    color: var(--orange);
                    transition: all .1s ease-in-out;
                }
            }
        }
    }


`
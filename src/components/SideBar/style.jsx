import styled from "styled-components";

const Container = styled.div`
    width: var(--sidebar-width);
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #4fea17;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;

    @media (max-width: 450px) {
        display: none;
    }

    /* @media (min-width: 450px) {
        height: var(--height-header-desktop);
    } */
`

const SubContainer = styled.div`
    /* min-width: var(--subcontainer-width);
    max-width: var(--subcontainer-max-width);
    width: 80%; */
    display: flex; 
    flex-direction: column;
    gap: 50px;
    margin-top: 100px;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
        font-size: 12px;
        margin-top: 5px;
    }
`
const Icon = styled.p`
    font-size: var(--icon-size-mobile);
    cursor: pointer;

    @media (min-width: 450px) {
        font-size: var(--icon-size-desktop);
    }
`
const Logo = styled.img`
     max-width: var(--logo-header-mobile);
     padding-top: var(--logo-header-top);

     @media (min-width: 450px) {
        max-width: var(--logo-header-desktop);
        padding-top: 20px;
    }
`
export {
    Container,
    SubContainer,
    IconContainer,
    Logo,
    Icon
}
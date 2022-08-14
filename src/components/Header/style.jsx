import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header-mobile);
    display: flex;
    justify-content: center;
    background-color: #4fea17;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    @media (max-width: 450px) {
        height: var(--height-header-mobile);
    }

    @media (min-width: 450px) {
        height: var(--height-header-desktop);
    }
`

const SubContainer = styled.div`
    min-width: var(--subcontainer-width);
    max-width: var(--subcontainer-max-width);
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;     
`
const Icon = styled.p`
    font-size: var(--icon-size-mobile);

    @media (min-width: 450px) {
        font-size: var(--icon-size-desktop);
    }
`
const Logo = styled.img`
     max-width: var(--logo-header-mobile);
     padding-top: var(--logo-header-top);

     @media (min-width: 450px) {
        max-width: 100px;
        padding-top: 15px;
    }
`
export {
    Container,
    SubContainer,
    Logo,
    Icon
}
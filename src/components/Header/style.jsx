import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header-mobile);
    background-color: #4fea17;
    position: fixed;
    bottom: 0;
    z-index: 5;
    
    @media (max-width: 450px) {
        height: var(--height-header-mobile);
    }
    
    @media (min-width: 450px) {
        display: none;
        height: var(--height-header-desktop);
    }
`

const SubContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
`
const Icon = styled.p`
    font-size: var(--icon-size-mobile);
    padding-top: 5px;
    cursor: pointer;
`
const IconContainer = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 

    h5 {
        font-size: 12px;
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
    Icon,
}
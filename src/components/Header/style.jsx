import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header-mobile);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: var(--button-color); */
    background-color: var(--color-1);
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
const Logo = styled.img`
     max-width: var(--logo-header-mobile);
     padding-top: var(--logo-header-top);
     margin-left: -20px;

     @media (min-width: 450px) {
        max-width: var(--logo-header-desktop);
        padding-top: 20px;
    }
`
const Icon = styled.p`
     font-size: var(--icon-size-mobile);
     margin-left: 30px;
     cursor: pointer;

@media (min-width: 450px) {
    font-size: var(--icon-size-desktop);
}
`
const SearchIcon = styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;

    @media (max-width: 450px) {
        font-size: 20px;
        right: 5px;
        top: 8px;
    }
`
const SearchBar = styled.div`
    max-width: 400px;
    width: 80%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10px;

        h3 {
            font-size: 25px;
            color: gray;

            @media (max-width: 450px) {
                font-size: 15px;
            }
        }

        @media (max-width: 450px) {
        width: var(--footer-search-width-mobile);
        height: var(--footer-search-height-mobile);
    }   
`
const Services = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    padding-left: 10px;
    padding-top: 40px;
    display: ${(props) => props.visible ? "block" : "none"};
    position: absolute;
    left: -1px;
    top: 20px;
    z-index: -1;
    cursor: pointer;
    overflow-y: scroll;

::-webkit-scrollbar {
        width: 0px;
    }

     p {
        font-size: 25px;
        margin: 20px 0;

         @media (max-width: 450px) {
            font-size: 15px;
            margin: 15px 0;
        }  
     }

     @media (max-width: 450px) {
        width: var(--footer-search-width-mobile);
        height: 150px;
        padding-top: 25px;

        /* bottom: 30px;
        padding-bottom: 2px; */
    }  
`
export {
    Container,
    SubContainer,
    Logo,
    SearchBar,
    Services,
    Icon,
    SearchIcon
}
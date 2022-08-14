import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header-mobile);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--button-color);
    position: fixed;
    bottom: 0;
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
const SearchIcon = styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    right: 10px;
    top: 4px;

    @media (max-width: 450px) {
        font-size: 15px;
        right: 3px;
        top: 4px;
    }
`

const SearchBar = styled.div`
    max-width: 400px;
    width: 80%;
    height: 40px;
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
        width: 200px;
        height: 25px;
    }   
     
`

const Services = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    padding-left: 10px;
    padding-bottom: 20px;
    display: ${(props) => props.visible ? "block" : "none"};
    position: absolute;
    right: -1px;
    bottom: 20px;
    z-index: -1;
    cursor: pointer;
    overflow-y: scroll;

::-webkit-scrollbar {
        width: 0px;
    }

     p {
        font-size: 25px;
        margin: 10px 0;

         @media (max-width: 450px) {
            font-size: 15px;
        }  
     }

     @media (max-width: 450px) {
        width: 200px;
        height: 50px;
        right: -1px;
        bottom: 20px;
        padding-bottom: 2px;
    }  
`
export {
    Container,
    SubContainer,
    SearchBar,
    Services,
    Icon,
    SearchIcon
}
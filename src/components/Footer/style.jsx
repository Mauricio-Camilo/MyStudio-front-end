import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header-mobile);
    display: flex;
    justify-content: space-around;
    align-items: center; 
    background-color: var(--button-color);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;

    @media (min-width: 450px) {
        display: none;
    }
`
const Icon = styled.p`
    font-size: var(--icon-size-mobile);
`
const SearchIcon = styled.p`
    font-size: var(--icon-size-mobile);
    position: absolute;
    right: 0;
    top: 4px;
`

const SearchBar = styled.div`
    width: 150px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    position: relative;
`

const Services = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    bottom: 10px;
    z-index: -1;
    padding: 10px;
    display: ${(props) => props.visible? "block": "none"};
    cursor: pointer;
    overflow-y: scroll; 

::-webkit-scrollbar {
        width: 0px;
    }       

     p {
         margin: 20px 0;
     }

`
export {
    Container,
    SearchBar,
    Services,
    Icon,
    SearchIcon
}
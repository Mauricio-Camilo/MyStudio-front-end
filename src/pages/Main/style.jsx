import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: var(--height-header);
    padding-bottom: 50px;
    background: var(--container-background);
`

const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: var(--main-title-size);
    text-align: center;
    color: var(--title-font-color);
    margin-top: 15px;
    margin-bottom: 24px;
`

const SubContainer = styled.div`
    min-width: var(--subcontainer-width);
    width: 80%;
    border: 3px solid white;
    display: flex;
    gap: 10px;
    padding: 10px 0;
    position: relative;
    background-color: ${(props) => props.selected ? "red" : "none"};

        div {
            display: flex;
            flex-direction: column;
            gap: var(--subcontainer-div-gap);
        }

        h2 {
            font-size: var(--subcontainer-font-size);
        }
`

const ClientContainer = styled.div`
    padding-left: 15px;
`

const IconWhatsApp = styled.p`
    display: ${(props) => props.selected? "block" : "none"};
    font-size: var(--icon-size);
    color: #41A918;
    background-color: white;
    position: absolute;
    top: 10px;
    right: 10px;
`

const IconDelete= styled.p`
    font-size: var(--icon-size);
    color: #FFFFFF;
    position: absolute;
    top: 50px;
    right: 10px;
`
const IconUpdate = styled.p`
    font-size: var(--icon-size);
    position: absolute;
    top: 90px;
    right: 10px;
`

export {
    Container,
    Title,
    SubContainer,
    ClientContainer,
    IconWhatsApp,
    IconDelete,
    IconUpdate,
}
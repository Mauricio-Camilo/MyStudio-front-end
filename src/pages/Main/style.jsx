import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: var(--height-header-mobile);
    padding-bottom: 50px;
    background: var(--container-background);

    @media (max-width: 450px) {
        margin-top: var(--height-header-mobile);
        margin-bottom: var(--height-header-mobile);
    }

    @media (min-width: 450px) {
        margin-top: var(--height-header-desktop);
    }
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
    max-width: var(--subcontainer-max-width);
    width: 80%;
    border: ${(props) => props.selected ? "3px solid red" : "3px solid #90388C"};
    display: flex;
    gap: 10px;
    padding: 10px 0;
    position: relative;
    background-color: ${(props) => props.selected ? "#4fea17" : "none"};

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
    max-width: 700px;
    word-wrap: break-word;

    @media (max-width: 400px) {
        max-width: 300px;
        word-wrap: break-word;
    }
`

const IconWhatsApp = styled.p`
    display: ${(props) => props.selected? "block" : "none"};
    font-size: var(--icon-size-desktop);
    color: #41A918;
    background-color: white;
    position: absolute;
    top: 20px;
    right: 20px;

    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
`

const IconDelete= styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    top: 70px;
    right: 20px;
    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
`
const IconUpdate = styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    top: 120px;
    right: 20px;
    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
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
import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: pink;
    gap: 25px;
    margin-top: var(--height-header);
`

const Title = styled.h1`
    /* font-family: 'Saira Stencil One', cursive;  */
    font-size: var(--main-title-size);
    text-align: center;
    color: black;
    margin-top: 15px;
    margin-bottom: 24px;
`

const SubContainer = styled.div`
    min-width: var(--subcontainer-width);
    width: 80%;
    border: 3px solid blue;
    display: flex;
    gap: 10px;
    padding: 10px 0;
    position: relative;
    background-color: ${(props) => props.selected ? "red" : "none"};
    /* margin-right: 50px;
    margin-left: 50px; */


        div {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        h2 {
            font-size: 20px;
        }
`

const Notificate = styled.button`
    display: ${(props) => props.selected? "block" : "none"};
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 10px;
`
const Delete = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50px;
    right: 10px;
`
const Update = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 90px;
    right: 10px;
`

export {
    Container,
    Title,
    SubContainer,
    Notificate,
    Delete,
    Update
}
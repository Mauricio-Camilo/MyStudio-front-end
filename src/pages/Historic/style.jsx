import styled from "styled-components";

export const HistoricSubContainer = styled.div`
    min-width: var(--subcontainer-width);
    max-width: var(--subcontainer-max-width);
    width: 80%;
    border: 3px solid #90388C;
    display: flex;
    gap: 10px;
    padding: 10px 0;
    position: relative;
    background-color: "none";

        div {
            display: flex;
            flex-direction: column;
            gap: var(--subcontainer-div-gap);
        }

        h2 {
            font-size: var(--subcontainer-font-size);
        }
`

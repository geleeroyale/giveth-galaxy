import React from "react";
import styled from "styled-components";

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  justify-items: start;
  align-items: center;
  min-width: 320px;
`;

const CellImage = styled.div`
  padding: 5px;
  width: 70px;
  height: 70px;
  background: #222;
  border-radius: 80px;
  background-image: url(${props => props.image});
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: center;
  grid-column: 1;
  grid-row: 1 / span 2;
  justify-items: stretch;
  align-items: stretch;
`;

const CellTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-self: end;
`;

const CellDescription = styled.div`
  font-size: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  grid-column: 2;
  grid-row: 2;
  align-self: start;
`;

const Padding = styled.div`
  padding-bottom: 10px;
`;

const Cell = props => (
  <CellGroup>
    <CellImage image={props.image} />
    <CellTitle>
      <a href={props.link}>{props.title}</a>
    </CellTitle>
    <CellDescription>{props.description}</CellDescription>
    <Padding />
  </CellGroup>
);

export default Cell;

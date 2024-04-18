import styled from "styled-components";
import { ResponseCard } from "@/app/components/ai/responseCard";
import { useState } from "react";
import { NextProgressButton } from "../button/nextProgressButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // 카드 사이의 간격
  margin-top: 200px;
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

// 3 cards in a row styled component
export function CardContainer() {
  const [selectedState, setSelectedState] = useState([false, false, false]); // [false, false, false
  const [rankState, setRankState] = useState([0, 0, 0]);

  // onClick function to handle the card selection
  const handleCardSelection = (number: number) => {
    if (selectedState[number] === true) {
      //set selectedState[number] to false
      setSelectedState((prev) => {
        const newState = [...prev];
        newState[number] = false;
        return newState;
      });
      //change the rank of the other cards if needed
      setRankState((prev) => {
        const newState = [...prev];
        return newState.map((value) => {
          if (value > prev[number]) {
            return value - 1;
          } else {
            return value;
          }
        });
      });
      //set rankState[number] to 0
      setRankState((prev) => {
        const newState = [...prev];
        newState[number] = 0;
        return newState;
      });
    } else {
      //set selectedState[number] to true
      setSelectedState((prev) => {
        const newState = [...prev];
        newState[number] = true;
        return newState;
      });
      //set rankState[number] to selectedCardCnt
      setRankState((prev) => {
        const newState = [...prev];
        newState[number] = prev.filter((value) => value !== 0).length + 1;
        return newState;
      });
    }
  };

  return (
    <>
      <Container>
        <ResponseCard
          isSelected={selectedState[0]}
          rank={rankState[0]}
          onClick={() => handleCardSelection(0)}
        ></ResponseCard>
        <ResponseCard
          isSelected={selectedState[1]}
          rank={rankState[1]}
          onClick={() => handleCardSelection(1)}
        ></ResponseCard>
        <ResponseCard
          isSelected={selectedState[2]}
          rank={rankState[2]}
          onClick={() => handleCardSelection(2)}
        ></ResponseCard>
      </Container>
      <NextButton>
        <NextProgressButton
          progressCnt={rankState.filter((value) => value !== 0).length}
        ></NextProgressButton>
      </NextButton>
    </>
  );
}

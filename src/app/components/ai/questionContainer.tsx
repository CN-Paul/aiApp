import styled from "styled-components";

const Container = styled.div``;

interface QuestionContainerProps {
  topic?: string;
  question?: string;
}

export function QuestionContainer(props: QuestionContainerProps) {
  return <Container></Container>;
}

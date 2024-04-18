import styled from "styled-components";

const Card = styled.div<{ rank?: number }>`
  width: 300px; // Initial width
  height: ${({ rank }) =>
    rank === 1
      ? "650px"
      : rank === 2
      ? "550px"
      : rank === 3
      ? "450px"
      : "600px"}; // Set height based on rank
  background-color: white; // Change card color to skyblue
  transition: all 0.3s ease-in-out; // Smooth transition for size change
  border-radius: 20px; // Rounded edges
  padding: 10px; // Add margin to the card
  border: ${({ rank }) =>
    rank === 1
      ? "2px solid gold"
      : rank === 2
      ? "2px solid silver"
      : rank === 3
      ? "2px solid brown"
      : "2px solid #0064ff"}; // Add border color based on rank
  margin-top: ${({ rank }) =>
    rank === 1
      ? "-50px"
      : rank === 2
      ? "50px"
      : rank === 3
      ? "150px"
      : "0px"}; // Set margin-top based on rank

  &:hover {
    width: 350px; // Width on hover
    height: ${({ rank }) =>
      rank === 1
        ? "700px"
        : rank === 2
        ? "600px"
        : rank === 3
        ? "500px"
        : "650px"}; // Height on hover based on rank
    margin-top: ${({ rank }) =>
      rank === 1
        ? "-100px"
        : rank === 2
        ? "0px"
        : rank === 3
        ? "100px"
        : "-50px"}; // Set margin-top on hover based on rank
  }
`;

interface ResponseCardProps {
  aiName?: string;
  rank?: number;
  isSelected?: boolean;
  onClick?: () => void;
  onHover?: () => void;
}

export function ResponseCard(props: ResponseCardProps) {
  return (
    <Card
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      rank={props.rank ?? 0}
    >
      <h2>{props.aiName ?? "AI Response"}</h2>
      <p>Click me to see the response</p>
      <p>Rank: {props.rank ?? 0}</p>
      <p>isSelected?: {props.isSelected ? "Yes" : "No"}</p>
      <div style={{ overflowY: "scroll", maxHeight: "500px" }}>
        {/* Add your scrollable content here */}
      </div>
    </Card>
  );
}

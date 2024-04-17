import styled from "styled-components";

const Card = styled.div`
  width: 300px; // Initial width
  height: 600px; // Initial height
  background-color: lightgray;
  transition: all 0.3s ease-in-out; // Smooth transition for size change
  border-radius: 20px; // Rounded edges
  padding: 10px; // Add margin to the card

  &:hover {
    width: 350px; // Width on hover
    height: 700px; // Height on hover
    transform: translateY(-100px); // Move card upwards by 50px on hover
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
    <Card onClick={props.onClick} onMouseEnter={props.onHover}>
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

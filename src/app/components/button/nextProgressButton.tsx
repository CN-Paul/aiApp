import styled from "styled-components";
import { motion } from "framer-motion";

const NextButton = styled(motion.button)`
  width: 400px;
  height: 50px;
  background-color: #202632;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  position: relative;
  display: flex;
`;

const Text = styled.span`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingBar = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #0064ff;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

interface NextProgressButtonProps {
  onClick?: () => void;
  progressCnt: number;
}

export function NextProgressButton(props: NextProgressButtonProps) {
  const variants = {
    initial: { width: "0%" },
    loading1: { width: "33%" },
    loading2: { width: "66%" },
    loaded: { width: "100%" },
  };

  const getLoadingVariant = () => {
    if (props.progressCnt === 1) {
      return "loading1";
    } else if (props.progressCnt === 2) {
      return "loading2";
    } else if (props.progressCnt === 3) {
      return "loaded";
    }
    return "initial";
  };

  return (
    <NextButton whileTap={{ scale: 0.9 }}>
      <Text>Next</Text>
      <LoadingBar
        initial="initial"
        animate={getLoadingVariant()}
        variants={variants}
        transition={{ duration: 1 }}
      />
    </NextButton>
  );
}

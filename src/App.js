import Progressbar from "./Progressbar";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Progressbar />
      <Progressbar />
      <Progressbar />
    </AppContainer>
  );
}

export default App;

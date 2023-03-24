import { Button, MtayyarButton } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText.styled"
import {Tasiyici} from "./components/Tasiyici"
import Links from "./components/Links";


const App = () => {

  // Css in Js
  return (
    <>
      <Tasiyici bg="#dede">
        <HeaderText color="hotpink">Styled Components</HeaderText>
        <Button>Send</Button>
        <Button primary>Send</Button>
        <MtayyarButton react>Çalış</MtayyarButton>
        <MtayyarButton>Dinlen</MtayyarButton>
      </Tasiyici>
      <Tasiyici>
        <Links href="https://www.google.com" target="_blank">
          Mustafa Tayyar Web site
        </Links>
        <Links tayyar href="https://www.google.com" target="_blank">
          ReactJS
        </Links>
      </Tasiyici>
    </>
  );
};

export default App;

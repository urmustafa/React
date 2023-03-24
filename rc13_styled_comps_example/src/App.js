import Header from "./components/Header";
import Button from "./components/styled/Button"
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";

const styles={
  colors:{
    renkBir:"#eee",
    renkIki:"#686"
  },
  margins:{

  },
  paddings:{

  },
  breakpoints:{ xs:"300px",
    sm:"600px",
    md:"900px"

  }
}



const App = () => {
  return (
    <>
      <ThemeProvider theme={styles}>
        <GlobalStyles/>
        <Container>
          <Header></Header>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

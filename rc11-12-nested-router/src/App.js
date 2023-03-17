import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  Paths  from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import ReactJs from "./pages/ReactJs";
import PrivateRouter from "./pages/PrivateRouter"
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/people/:id" element={<PersonDetail />}> </Route>
        <Route path="/paths" element={<Paths/>}> 
          <Route path="" element={<FullStack></FullStack>}>
            <Route path="" element={
              <ReactJs></ReactJs>}>
            </Route>
          </Route>
          <Route path="aws" element={<Aws></Aws>}></Route>
        </Route>
        <Route path="/contact" element={<PrivateRouter></PrivateRouter>}>
          <Route path="" element={<Contact />}></Route>
        </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="*" element={<NotFound />}> </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

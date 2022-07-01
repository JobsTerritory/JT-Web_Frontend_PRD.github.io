import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import Home from "./components/Home";
import RecrServices from "./components/RecrServices";
import Drm from "./components/Drm";
import Signup from "./components/Signup";
import Blogs from "./components/Blogs";
import Training from "./components/Training";
import Bceh from "./components/Bceh";
import Pph from "./components/Pph";
import PartTime from "./components/PartTime";
import LeadershipHiring from "./components/LeadershipHiring";
import ContractHiring from "./components/ContractHiring";
import WTpage from "../src/components/components/main-page/WTpage";
import Founder from "../src/components/founder/founder";
import About from "../src/components/components/about/about";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<RecrServices />} />
        <Route exact path="/Drm" element={<Drm />} />
        <Route exact path="/BCEH" element={<Bceh />} />
        <Route exact path="/payperhire" element={<Pph />} />
        <Route exact path="/parttime" element={<PartTime />} />
        <Route exact path="/leadershiphiring" element={<LeadershipHiring />} />
        <Route exact path="/contracthiring" element={<ContractHiring />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/trainings" element={<Training />} />
        <Route exact path="/womenterritory" element={<WTpage />} />
        {/* <Route exact path='/founder' element = {<Founder/>} /> */}
        <Route exact path="/aboutus" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

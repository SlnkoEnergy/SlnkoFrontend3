import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Reference from "./components/Reference1";
import Reference2 from "./components/Reference2";
import Reference3 from "./components/Reference3";
import Reference4 from "./components/Reference4";
import ReferenceList from "./components/ReferenceList";
import CivilWorks1 from "./components/CivilWorks1";
import CivilWorks2 from "./components/CivilWorks2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page16 from "./components/Page16.jsx";
import Page17 from "./components/Page17.jsx";
import Page18 from "./components/Page18.jsx";
import Summary from "./components/Summary.jsx";
import Costing_Input from "./components/Costing_Input.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Reference />} />
          <Route path="/4" element={<Reference2 />} />
          <Route path="/5" element={<Reference3 />} />
          <Route path="/6" element={<Reference4  />} />
          <Route path="/7" element={<CivilWorks1  />} />
          <Route path="/8" element={<CivilWorks2  />} />
          <Route path="/9" element={<Page3 />} />
          <Route path="/10" element={<Page4 />} />
          <Route path="/11" element={<Page5 />} />
          <Route path="/12" element={<Page6 />} />
          <Route path="/13" element={<Page7 />} />
          <Route path="/14" element={<Page8 />} />
          <Route path="/15" element={<Page9 />} />
          <Route path="/16" element={<Page16 />} />
          <Route path="/17" element={<Page17 />} />
          <Route path="/18" element={<Page18 />} />
          <Route path="/19" element={<Summary  />} />
          <Route path="/20" element={<Costing_Input  />} />
          <Route path="/" element={<ReferenceList  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

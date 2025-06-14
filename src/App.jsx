import React, { useState } from "react";

import { Home } from "./pages/Home/Home";
import { Route,Routes } from "react-router-dom";
import { Video } from "./pages/Video/Video.jsx";
import { Navbar } from "./Components/Navbar/Navbar";

const App = () => {
  const [sidebar,setSidebar] = useState(true);

  return <div>
    <Navbar setSidebar={setSidebar}/>
    <Routes>
      <Route path="/" element={<Home sidebar={sidebar}/>}/>
      <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
    </Routes>
  </div>;
};

export default App;
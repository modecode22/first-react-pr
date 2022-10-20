import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Soso from "./components/soso";
import Gogo from "./components/gogo";
import Toto from "./components/toto";
import Error404 from './components/error404';
import Home from './components/home';

function App() {
  const tt = [
    {
      id: 1,
      aa: "fdgfdg",
      bb: "1111",
    },
    {
      id: 2,
      aa: "fdgfrtfdhdg",
      bb: "222",
    },
    {
      id: 3,
      aa: "hgj",
      bb: "333",
    },
  ];
  const hhhhhh = (ohh) => {
    console.log("hhhhhhh" + ohh);
  };
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/card"
            element={
              tt.length ? (
                tt.map((item, index) => {
                  return (
                    <Card
                      key={item.id}
                      title={item.aa}
                      pp={item.bb}
                      koka={hhhhhh}
                    />
                  );
                })
              ) : (
                <h2> ماكانش داتا </h2>
              )
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/soso" element={<Soso />} />
          <Route path="/gogo" element={<Gogo />} />
          <Route path="/toto" element={<Toto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

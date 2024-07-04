import Nav from "./components/Nav";
import Body from "./components/Body";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [page, gotoPage] = useState(0);
  return (
    <div>
      <Nav active={page} goto={gotoPage} />
      <Body active={page} />
      <Footer />
    </div>
  );
}

export default App;

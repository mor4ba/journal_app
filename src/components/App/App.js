import "./App.css";
import Header from "../header/Header";
import Body from "../Body/Body";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import Entrylist from "../Entrylist/Entrylist";
import { useState } from "react";

function App() {
  const [entry, setEntries] = useState([]);
  console.log(entry);
  return (
    <Body>
      <Header />
      <main>
        <Form entry={entry} setEntries={setEntries} />
        <Entrylist classes="noteList" entries={entry} />
      </main>
      <Footer />
    </Body>
  );
}

export default App;

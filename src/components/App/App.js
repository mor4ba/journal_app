import "./App.css";
import Header from "../header/Header";
import Body from "../Body/Body";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Body>
      <Header />
      <main>
        <Form />
        <ul className="noteList"></ul>
      </main>
      <Footer />
    </Body>
  );
}

export default App;

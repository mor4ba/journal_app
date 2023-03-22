import "./App.css";
import Header from "../header/Header";
import Body from "../Body/Body";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import Entrylist from "../Entrylist/Entrylist";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

function App() {
  const [entry, setEntries] = useLocalStorageState("entry", {
    defaultValue: [],
  });

  const [filter, setFilter] = useState("all");

  function handleShowAllEntries() {
    setFilter("all");
    console.log(entry);
  }

  function handleShowFavoriteEntries() {
    setFilter("favorite");
    console.log(favoriteEntries);
  }

  const favoriteEntries = entry.filter((entry) => entry.isFavorite);

  function onToggleFavorite(id) {
    setEntries(
      entry.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  return (
    <Body>
      <Header />
      <main>
        <Form entry={entry} setEntries={setEntries} />
        <Entrylist
          classes="noteList"
          entries={filter === "all" ? entry : favoriteEntries}
          onToggleFavorite={onToggleFavorite}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
          favoriteEntriesCount={favoriteEntries.length}
          allEntriesCount={entry.length}
        />
      </main>
      <Footer />
    </Body>
  );
}

export default App;

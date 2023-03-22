import Entry from "./Entry";
import Tab from "../Tabs/Tab";
import Tabs from "../Tabs/Tabs";
import Badge from "../Badge/Badge";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  onShowFavoriteEntries,
  onShowAllEntries,
  favoriteEntriesCount,
  allEntriesCount,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active event={onShowAllEntries}>
          All Entries <Badge isActive>{allEntriesCount}</Badge>
        </Tab>
        <Tab event={onShowFavoriteEntries}>
          Favorites <Badge>{favoriteEntriesCount}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries?.map((entry) => {
          return (
            <Entry
              key={entry.id}
              id={entry.id}
              date={entry.date}
              notes={entry.text}
              heading={entry.head}
              isFavorite={entry.isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          );
        })}
      </div>
    </section>
  );
}

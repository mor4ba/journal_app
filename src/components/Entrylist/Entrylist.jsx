import Entry from "./Entry";
import Tab from "../Tabs/Tab";
import Tabs from "../Tabs/Tabs";
import Badge from "../Badge/Badge";

export default function EntriesSection({ entries }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => {
          // console.log(entry);

          return (
            <Entry
              key={index}
              date={entry.date}
              notes={entry.text}
              heading={entry.head}
            />
          );
        })}
      </div>
    </section>
  );
}

import Entry from "./Entry";
import Tab from "../Tabs/Tab";
import Tabs from "../Tabs/Tabs";
import Badge from "../Badge/Badge";
import {useState} from "react";

export default function EntriesSection({
                                           entries,
                                           deleteEntries,
                                            setEntries,
                                       }) {

    const sortedEntries = [...entries].sort((a, b) => b.ini - a.ini);



    return (
        <section className="entries-section">
            <div className="entries-section__entries">
                {sortedEntries?.map((entry) => {
                    return (
                        <Entry
                            key={entry.id}
                            id={entry.id}
                            date={entry.date}
                            name={entry.name}
                            hp={entry.hp}
                            armor={entry.armor}
                            ini={entry.ini}
                            isFavorite={entry.isFavorite}
                            deleteEntries={deleteEntries}
                            setEntries={setEntries}
                        />
                    );
                })}
            </div>
        </section>
    );
}

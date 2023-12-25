import React, { useState, useEffect } from "react";

const CountdownForm = () => {
    const [countdowns, setCountdowns] = useState([]);
    const [name, setName] = useState("");
    const [time, setTime] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        setCountdowns((prevCountdowns) => [
            ...prevCountdowns,
            { id: Date.now(), name, time: time * 60, expired: false },
        ]);

        setName("");
        setTime(0);
    };

    const handleDelete = (id) => {
        setCountdowns((prevCountdowns) => prevCountdowns.filter((countdown) => countdown.id !== id));
    };

    useEffect(() => {
        // Starte alle Countdowns
        const intervals = countdowns
            .filter((countdown) => !countdown.expired)
            .map((countdown) => {
                return setInterval(() => {
                    setCountdowns((prevCountdowns) =>
                        prevCountdowns.map((c) =>
                            c.id === countdown.id
                                ? { ...c, time: c.time - 1, expired: c.time - 1 === 0 }
                                : c
                        )
                    );
                }, 1000);
            });

        // Überprüfe, ob ein Countdown abgelaufen ist
        countdowns.forEach((countdown) => {
            if (countdown.expired && !countdown.alerted) {
                window.alert(`Der Countdown für ${countdown.name} ist abgelaufen!`);
                setCountdowns((prevCountdowns) =>
                    prevCountdowns.map((c) =>
                        c.id === countdown.id ? { ...c, alerted: true } : c
                    )
                );
            }
        });

        // Aufräumen der Intervalle bei Unmount
        return () => {
            intervals.forEach((interval) => clearInterval(interval));
        };
    }, [countdowns]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="formFieldWrapper">
                <label>
                    Name:
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="formFieldWrapper">
                <label>
                    Zeit (in Minuten):
                </label>
                <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <button type="submit">Start Countdown</button>
            </form>

            {countdowns.map((countdown) => (
                <div key={countdown.id}>
                    <p>{countdown.expired ? `Der Countdown ${countdown.name} ist abgelaufen.` : null}</p>
                    <p>
                        Countdown für {countdown.name}: {formatTime(countdown.time)}
                    </p>
                        <button onClick={() => handleDelete(countdown.id)}>Löschen</button>
                </div>
            ))}
        </div>
    );
};

export default CountdownForm;

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MoodCard from "../components/MoodCard";
import StatsCard from "../components/StatsCard";
import ChartBlock from "../components/ChartBlock";
import EntriesList from "../components/EntriesList";


export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addEntry = (entry) => setEntries([entry, ...entries]);
  const deleteEntry = (id) => setEntries(entries.filter((e) => e.id !== id));

  const searchResults = searchTerm 
    ? entries.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.text.toLowerCase().includes(searchTerm.toLowerCase())) 
    : [];

  const happyCount = entries.reduce((acc, curr) => (curr.mood === "😊" ? acc + 1 : acc), 0);

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <MoodCard onAdd={addEntry} />

        <div className="stats-row">
          <StatsCard title="Total Entries" value={entries.length} />
          <StatsCard title="Happy Moments" value={happyCount} />
          
          <div className="card small search-container" style={{ position: 'relative' }}>
            <p className="subtitle">Quick Search</p>
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-field"
              />
            </div>

            {searchTerm && (
              <div className="quick-search-results">
                {searchResults.length > 0 ? (
                  searchResults.map(e => (
                    <div key={e.id} className="quick-result-item">
                      <span>{e.mood}</span> <strong>{e.title}</strong>
                    </div>
                  ))
                ) : (
                  <div className="quick-result-item">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>

        <ChartBlock entries={entries} />

        <h3>Recent Journal Entries</h3>
        <EntriesList entries={entries} onDelete={deleteEntry} />
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import Suggestions from "./components/Suggestions";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import TreeOffset from "./components/TreeOffset";
import ExportPDF from "./components/ExportPDF";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [total, setTotal] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load data from Local Storage
  useEffect(() => {
    const savedTotal = localStorage.getItem("carbonResult");
    const savedHistory = localStorage.getItem("carbonHistory");
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTotal) {
      setTotal(JSON.parse(savedTotal));
    }

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }

    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save latest result
  useEffect(() => {
    if (total !== null) {
      localStorage.setItem(
        "carbonResult",
        JSON.stringify(total)
      );
    }
  }, [total]);

  // Save history
  useEffect(() => {
    localStorage.setItem(
      "carbonHistory",
      JSON.stringify(history)
    );
  }, [history]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const calculateEmission = (data) => {
    let travelFactor = 0.192;

    if (data.fuel === "diesel") {
      travelFactor = 0.171;
    } else if (data.fuel === "public") {
      travelFactor = 0.08;
    }

    const electricityCO2 =
      Number(data.electricity) * 0.85;

    const travelCO2 =
      Number(data.distance) *
      travelFactor *
      30;

    const wasteCO2 =
      Number(data.waste) * 0.57;

    const totalEmission =
      electricityCO2 +
      travelCO2 +
      wasteCO2;

    setTotal(totalEmission);

    setHistory((prevHistory) => [
      ...prevHistory,
      totalEmission,
    ]);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("carbonHistory");
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-slate-800 text-gray-100"
          : "bg-gray-100"
      }`}
    >
      <Navbar />

      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />

      <InputForm
  calculateEmission={calculateEmission}
  darkMode={darkMode}
/>

      {total !== null && (
        <>
          <ResultCard
            total={total}
            darkMode={darkMode}
          />

          <Suggestions
            total={total}
            darkMode={darkMode}
          />

          <Dashboard
            total={total}
            darkMode={darkMode}
          />

          <TreeOffset
            total={total}
            darkMode={darkMode}
          />

          <ExportPDF total={total} />
        </>
      )}

      {history.length > 0 && (
        <>
          <History
            history={history}
            darkMode={darkMode}
          />

          <div className="flex justify-center mt-4">
            <button
              onClick={clearHistory}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
            >
              Clear History
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
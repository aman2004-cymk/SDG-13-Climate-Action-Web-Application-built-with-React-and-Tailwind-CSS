function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
        bg-green-700
        text-white
        px-4
        py-2
        rounded-lg
        shadow
        hover:bg-green-800
        transition"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
import { useDarkMode } from "../hooks";

function DarkModeSwitch() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleDarkModeSwitch = () => {
    toggleDarkMode();
  };

  return (
    <button
      data-testid="language-switch"
      type="button"
      className="focus:outline-none focus:underline hover:underline"
      onClick={() => handleDarkModeSwitch()}
    >
      {isDarkMode ? "🌚" : "🌞"}
    </button>
  );
}

export default DarkModeSwitch;

import { useTheme } from "@/ui/context/theme/ThemeContext";
import { Moon, SunMoon } from "lucide-react";
import React from "react";

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center transition-colors text-secondary-light-200 bg-tertiary-light-100 rounded-full hover:text-dark-900 h-11 w-11 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    >
      <SunMoon className="hidden dark:block" />
      <Moon className="dark:hidden" />
    </button>
  );
};

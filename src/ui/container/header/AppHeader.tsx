import React, { useEffect, useRef, useState } from "react";

// import { Link } from "react-router";
// import { useSidebar } from "../context/SidebarContext";
// useSidebar
// import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
// import NotificationDropdown from "../components/header/NotificationDropdown";
import UserDropdown from "@/ui/components/ui/header/UserDropdown";
import NotificationDropdown from "@/ui/components/ui/header/NotificationDropdown";
import { useSidebar } from "@/ui/context";
import { ThemeToggleButton } from "../theme";
import { AlignLeft, Ellipsis, Search, X } from "lucide-react";
// import UserDropdown from "../components/header/UserDropdown";
// NotificationDropdown

export const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 flex w-full bg-tertiary-light-400 text-white z-50">
      <div className="flex flex-col items-center justify-between flex-grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="bg-tertiary-light-100 flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg z-50 lg:h-11 lg:w-11"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <X className="text-secondary-light-200"/>
            ) : <AlignLeft className="text-secondary-light-200" />}
            {/* Cross Icon */}
          </button>

          {/* <Link to="/" className="lg:hidden">
            <img
              className="dark:hidden"
              src="./images/logo/logo.svg"
              alt="Logo"
            />
            <img
              className="hidden dark:block"
              src="./images/logo/logo-dark.svg"
              alt="Logo"
            />
          </Link> */}

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-50 bg-tertiary-light-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <Ellipsis className="text-secondary-light-200"/>
          </button>

          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                  <Search className="text-secondary-light-200" />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search"
                  className="dark:bg-dark-900 h-11 w-full xl:w-[430px] rounded-lg bg-tertiary-light-100 py-2.5 pl-12 pr-14 font-semibold text-secondary-light-200 shadow-theme-xs placeholder:text-secondary-light-200/70 focus:outline-none"
                />

                <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg bg-secondary-light-200 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
                  <span> ⌘ </span>
                  <span> K </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`${isApplicationMenuOpen ? "flex" : "hidden"
            } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            {/* <!-- Dark Mode Toggler --> */}
            <ThemeToggleButton />
            {/* <!-- Dark Mode Toggler --> */}
            <NotificationDropdown />
            {/* <!-- Notification Menu Area --> */}
          </div>
          {/* <!-- User Area --> */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

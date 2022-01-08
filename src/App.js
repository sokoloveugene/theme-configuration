function App() {
  const handleChangeTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-contrast-lowest sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden text-contrast-lowest lg:block absolute right-0 inset-y-0 h-full w-48 text-primary transform translate-x-1/2"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="workflow"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl space-x-2">
                <span className="block xl:inline">Example</span>
                <span className="block text-contrast-low xl:inline">
                  tailwind theme configuration
                </span>
              </h1>
              <div className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <h5 className="mb-2">Current theme colors:</h5>
                <ul className="ml-4 space-y-2">
                  {[
                    ["contrast-lowest", "bg-contrast-lowest"],
                    ["contrast-lower", "bg-contrast-lower"],
                    ["contrast-low", "bg-contrast-low"],
                    ["contrast-medium", "bg-contrast-medium"],
                    ["contrast-high", "bg-contrast-high"],
                    ["contrast-higher", "bg-contrast-higher"],
                  ].map(([name, style]) => (
                    <li className="flex items-center space-x-4">
                      <div
                        className={`h-8 w-8 rounded-full ring-2 ring-contrast-higher ${style}`}
                      />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start sm:space-x-1">
                {[
                  ["Day theme", ""],
                  ["Night theme", "dark"],
                  ["Princess theme", "princess"],
                ].map(([name, theme]) => (
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => handleChangeTheme(theme)}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-contrast-lowest hover:bg-contrast-lower md:py-4 md:text-lg md:px-8"
                    >
                      {name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="picture.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import BHLogo from './BHLogo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from "./Profile";
import WorkExperience from "./WorkExperience";
import Skillset from "./Skillset";
import ResumeSection from './ResumeSection';

import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle, faBriefcase, faCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import './index.css';
import './signature-animate.css';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Profile</div>,
    main: () => <Profile/>
  },
  {
    path: "/work-experience",
    sidebar: () => <div>Work Experience</div>,
    main: () => <WorkExperience/>
  },
  {
    path: "/skillset",
    sidebar: () => <div>Skillset</div>,
    main: () => <Skillset/>
  }
];

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode())
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode])

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className="App">
      <header className={darkMode ? "App-header-dark" : "App-header-light"}>
      <Router>
      <div style={{ display: "flex", width: "100%" }}>
        <div id="router-sidebar" style={{ width: "3.1em", backgroundColor: "#282C34" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li id="logo-li">
              <BHLogo className="App-logo" />
            </li>
              <ResumeSection route="/" icon={faUserCircle}/>
              <ResumeSection route="/work-experience" icon={faBriefcase}/>
              <ResumeSection route="/skillset" icon={faCode}/>
            <li>
              <a id="twitter" href="https://twitter.com/Kobe_Brian" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li>
              <a id="github" href="https://github.com/brianHollingsworth" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <div id="dark-mode-toggle">
              <FontAwesomeIcon icon={darkMode ? faMoon : faSun} onClick={() => setDarkMode(prevMode => !prevMode)}/>
            </div>
          </ul>
        </div>

        <div id="router-switch" style={{ flex: 1, paddingRight: "1em" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;

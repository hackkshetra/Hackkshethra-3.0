import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/sections/Home";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import NetworkEnvironment from "./components/canvas/NetworkEnvironment";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Sponsors from "./components/sections/Sponsors";
import Glimpses from "./components/sections/Glimpses";
import Registration from "./components/sections/Registration";
import NotFound from "./components/sections/NotFound";
import { useLayoutEffect, useRef } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: calc(100vh - 68px);
  @media (max-width: 1099px) {
    min-height: calc(100dvh - 56px);
  }
  display: flex;
  flex-direction: column;
  isolation: isolate;
  position: relative;
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
  &:focus {
    outline: none;
  }
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: clamp(36px, 5vw, 72px) max(20px, 5vw) clamp(48px, 7vw, 96px);
  background:
    radial-gradient(circle at 50% 0%, rgba(23, 92, 230, 0.08), transparent 32rem),
    linear-gradient(
      38.73deg,
      rgba(23, 92, 230, 0.15) 0%,
      rgba(23, 92, 230, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  position: relative;
  @media (prefers-reduced-motion: no-preference) {
    animation: page-in 0.22s ease-out;
  }
`;

const ScrollToTop = () => {
  const { pathname, key } = useLocation();

  const previousKey = useRef(key);
  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);
  useLayoutEffect(() => {
    if (previousKey.current !== key)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    previousKey.current = key;
    window.scrollTo(0, 0);
    const title = pathname.slice(1);
    document.title = title
      ? title[0].toUpperCase() + title.slice(1) + " | HACKKSHETRA 3.0"
      : "HACKKSHETRA 3.0";
  }, [pathname, key]);
  return null;
};

const SiteRoutes = () => {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Body>
        <NetworkEnvironment />
        <Main key={pathname} id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <Wrapper>
                  <About />
                </Wrapper>
              }
            />
            <Route
              path="/domains"
              element={
                <Wrapper>
                  <Skills />
                </Wrapper>
              }
            />
            <Route
              path="/schedule"
              element={
                <Wrapper>
                  <Experience />
                </Wrapper>
              }
            />
            <Route
              path="/prizes"
              element={
                <Wrapper>
                  <Education />
                </Wrapper>
              }
            />
            <Route
              path="/sponsors"
              element={
                <Wrapper>
                  <Sponsors />
                </Wrapper>
              }
            />
            <Route
              path="/glimpses"
              element={
                <Wrapper>
                  <Glimpses />
                </Wrapper>
              }
            />
            <Route
              path="/team"
              element={
                <Wrapper>
                  <Projects />
                </Wrapper>
              }
            />
            <Route path="/contact" element={<Navigate to="/team" replace />} />
            <Route
              path="/register"
              element={
                <Wrapper>
                  <Registration />
                </Wrapper>
              }
            />
            <Route
              path="*"
              element={
                <Wrapper>
                  <NotFound />
                </Wrapper>
              }
            />
          </Routes>
        </Main>
        <Footer />
      </Body>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <SiteRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

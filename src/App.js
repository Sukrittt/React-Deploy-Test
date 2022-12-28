import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const pageFit = 9;
  const apiKey = process.env.REACT_APP_NEWS_API; // Accessing variable from environment file
  const [progress, setProgress] = useState(0);
  return (
    <div id="container" data-scroll-container>
      <Router>
        <LoadingBar color="#ddeeed" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            key="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageFit}
                country={"in"}
                category="general"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageFit}
                country={"in"}
                category="business"
                key="business"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageFit}
                country={"in"}
                category="entertainment"
                key="entertainment"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageFit}
                country={"in"}
                category="health"
                key="health"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageFit}
                country={"in"}
                category="science"
                key="science"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageFit}
                country={"in"}
                category="sports"
                key="sports"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageFit}
                country={"in"}
                category="technology"
                key="technology"
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

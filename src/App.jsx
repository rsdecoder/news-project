import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import Users from "./components/Users";
import "./App1.css";
import UserContext from "./contexts/User";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "weegembump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
  });

  return (
    <UserContext.Provider
      value={{ loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser }}
    >
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </UserContext.Provider>
  );
}

export default App;

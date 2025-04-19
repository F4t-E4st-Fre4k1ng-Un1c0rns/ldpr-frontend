import { Route, Router } from "preact-router";
import Anime from "@/pages/Anime";
import AnimeList from "@/pages/AnimeList";
import Header from "@/components/Header";

export function App() {
  return (
    <>
      <Header />
      <Router>
        <Route component={AnimeList} path="/" />
        <Route component={Anime} path="/anime/:id" />
      </Router>
    </>
  );
}

"use client";
import { useQuery } from "react-query";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { MovieType } from "./typemovies";
import Card from "./components/Card";

export default function Home() {
  const api = "https://api.tvmaze.com/shows";

  const { isLoading, error, data } = useQuery<MovieType[]>("moviesData", () =>
    fetch(api).then((res) => res.json())
  );
  console.log("api:-", data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <NavBar />
      <div className="w-full m-auto max-w-7xl px-2 flex flex-col gap-4">
        <SearchBar />
        <section className="w-full max-w-7xl m-auto flex flex-wrap justify-center gap-12">
          <main className="w-full max-w-7xl m-auto flex flex-wrap justify-center gap-12">
          {data?.map((item, index) => {
              return <Card/> })}
          </main>
        </section>
      </div>
    </>
  )}

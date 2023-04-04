import React from "react";

import { IFilm } from "../../types/film.types";

import FilmCardGrid from "../FilmCard/FilmCardGrid";
import FilmCardList from "../FilmCard/FilmCardList";

type Props = {
  films: IFilm[];
  colsNumber?: number;
  gridStyle?: "grid" | "list";
};

export default function FilmsGrid({
  films,
  colsNumber = 5,
  gridStyle = "grid",
}: Props) {
  return gridStyle === "grid" ? (
    <div
      className="grid gap-8 pb-4"
      style={{
        gridTemplateColumns: `repeat(${colsNumber}, minmax(0, 1fr))`,
      }}
    >
      {films.map((film) => (
        <FilmCardGrid key={film.id} film={film} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col pb-4">
      {films.map((film) => (
        <FilmCardList key={film.id} film={film} />
      ))}
    </div>
  );
}

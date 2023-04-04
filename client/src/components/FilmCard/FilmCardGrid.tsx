import React from "react";
import { IFilm } from "../../types/film.types";
import { getMinutesFromSeconds } from "../../utils/time.utils";

type Props = {
  film: IFilm;
};
export default function FilmCardGrid({ film }: Props) {
  return (
    <div className="flex flex-col">
      <img
        src={film.image}
        alt={film.title}
        className="h-80 w-full mb-4 rounded-md"
      ></img>
      <p className="text-base text-white mb-1">{film.title}</p>
      <p className="text-sm text-vGray truncate">
        <span>{getMinutesFromSeconds(film.duration)} mins</span>
        <span className="mx-2.5">|</span>
        <span className="uppercase">
          {film.genres.map((g) => g.name).join(", ")}
        </span>
      </p>
    </div>
  );
}

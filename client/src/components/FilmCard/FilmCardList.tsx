import React from "react";

import { IFilm } from "../../types/film.types";
import { getMinutesFromSeconds } from "../../utils/time.utils";

type Props = {
  film: IFilm;
};

const titleStyles = "text-sm font-bold text-vGray mb-1";

export default function FilmCardList({ film }: Props) {
  return (
    <div className="flex items-center justify-between h-56 bg-vGrayLight py-2.5 pl-4 pr-8 rounded-xl mb-5 last:mb-0">
      <img src={film.image} alt={film.title} className="w-32 mr-4 rounded-md" />
      <div className="flex flex-col">
        <span className={titleStyles}>Title:</span>
        <p className="text-base text-white mb-1">{film.title}</p>
      </div>
      <div className="flex flex-col max-w-lg">
        <span className={titleStyles}>Description:</span>
        <p className="text-base text-white mb-1 line-clamp-2">
          {film.description}
        </p>
      </div>
      <div className="flex flex-col">
        <span className={titleStyles}>Ganres:</span>
        <p className="text-sm text-vGray truncate uppercase">
          {film.genres.map((g) => g.name).join(", ")}
        </p>
      </div>
      <div className="flex flex-col">
        <span className={titleStyles}>Duration:</span>
        <p className="text-sm text-vGray truncate">
          <span>{getMinutesFromSeconds(film.duration)} mins</span>
        </p>
      </div>
    </div>
  );
}

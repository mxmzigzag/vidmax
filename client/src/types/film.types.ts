import { IGenre } from "./genre.types";

export interface IFilm {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  genres: IGenre[];
}

import { IFilm } from "../types/film.types";

export const FILMS: IFilm[] = [
  {
    id: "0",
    title: "John Wick: Chapter 4",
    description:
      "John Wick, legendary retired assassin, returns to the action driven by an uncontrollable search for revenge. Having to fight against people with thirst for blood who chase him, John will have to take his skills to the limit if he wants to leave this time alive.",
    genres: [
      { id: "0", name: "Action" },
      { id: "1", name: "Thriller" },
    ],
    duration: 10140,
    image:
      "https://fr.web.img3.acsta.net/pictures/22/12/05/15/03/0745763.jpg/r_550_x",
  },
  {
    id: "1",
    title: "Jesus Revolution",
    description:
      "Inspired by a true movement, JESUS REVOLUTION tells the story of a young Greg Laurie (Joel Courtney) being raised by his struggling mother, Charlene (Kimberly Williams-Paisley) in the 1970s.",
    genres: [{ id: "2", name: "Drama" }],
    duration: 7200,
    image:
      "https://fr.web.img6.acsta.net/pictures/22/10/21/16/09/0234485.jpg/r_550_x",
  },
  {
    id: "2",
    title: "Shazam! Fury of the Gods",
    description:
      "The film continues the story of teenage Billy Batson who, upon reciting the magic word 'SHAZAM!' is transformed into his adult Super Hero alter ego, Shazam.",
    genres: [
      { id: "3", name: "Comedy" },
      { id: "4", name: "Fantasy" },
    ],
    duration: 7800,
    image:
      "https://fr.web.img3.acsta.net/pictures/23/01/26/13/50/3103692.jpg/r_550_x",
  },
  {
    id: "3",
    title: "Scream VI",
    description:
      "Sixth installment of the masked murderer who harasses the inhabitants of a small community.",
    genres: [
      { id: "5", name: "Horror" },
      { id: "1", name: "Thriller" },
    ],
    duration: 7380,
    image:
      "https://fr.web.img2.acsta.net/pictures/23/01/20/08/50/3475684.jpg/r_550_x",
  },
];

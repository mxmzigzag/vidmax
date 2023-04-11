import React, { useState } from "react";

import { safePaddingStyles } from "../../constants/styles";

import { FILMS } from "../../data/films.dummy";
import { MOTION_TYPES } from "../../data/motionTypes.dummy";

import useDebounce from "../../hooks/useDebounce";

import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import FilmsGrid from "../FilmsGrid/FilmsGrid";
import SearchInput from "../SearchInput/SearchInput";

import ListIcon from "../../assets/icons/list";
import GridIcon from "../../assets/icons/grid";

export default function Featured() {
  const [search, setSearch] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [gridStyle, setGridStyle] = useState<"grid" | "list">("grid");
  const debouncedSearch = useDebounce(search, 300);

  const changeGridStyle = () => {
    setGridStyle(gridStyle === "grid" ? "list" : "grid");
  };

  return (
    <div className="bg-vBlack">
      <div className={`flex flex-col ${safePaddingStyles}`}>
        <SectionTitle
          title="Trending now"
          additionalContent={() => (
            <div className="flex items-center">
              <SearchInput value={search} onChange={setSearch} />
              <button onClick={changeGridStyle} className="ml-5">
                {gridStyle === "grid" ? <ListIcon /> : <GridIcon />}
              </button>
            </div>
          )}
        />
        <div className="flex flex-wrap gap-10 py-8">
          <Button
            onClick={() => setFilterType("")}
            buttonStyles="w-40 py-3"
            isActive={!filterType}
          >
            All films
          </Button>
          {MOTION_TYPES.map((type) => (
            <Button
              key={type.id}
              onClick={() => setFilterType(type.name)}
              buttonStyles="w-40 py-3"
              isActive={type.name === filterType}
            >
              {type.name}
            </Button>
          ))}
        </div>
        <FilmsGrid films={FILMS} gridStyle={gridStyle} />
      </div>
    </div>
  );
}

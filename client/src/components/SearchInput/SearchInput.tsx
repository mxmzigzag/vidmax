import React from "react";

import SearchIcon from "../../assets/icons/search";

type Props = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="relative">
      <input
        className="text-white border-silver border-2 py-1.5 pl-2 pr-14 bg-transparent rounded outline-0 focus:border-vRed"
        placeholder="Search for curtain film..."
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon className="absolute top-1/2 right-3.5 -translate-y-1/2" />
    </div>
  );
}

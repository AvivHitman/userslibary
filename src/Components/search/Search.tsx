import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUserBy } from "../../store/UsersDetailSlice";
import { SearchContainer } from "./Search.style";

type SearchProp = {
  onSearch: (isSearch: boolean) => void;
};
const Search = ({ onSearch }: SearchProp) => {
  const [searchBy, setSearchBy] = useState("Name");
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUserBy({ searchBy: searchBy, value: searchInput }));
    onSearch(searchInput !== "");
  }, [dispatch, searchInput]);

  const onOptionChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchBy(e.currentTarget.value);
    setSearchInput("");
  };

  const onSearchValueChanged = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.currentTarget.value);
  };
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder={"Search by " + searchBy}
        value={searchInput}
        onChange={onSearchValueChanged}
        style={{ width: "100%" }}
      />
      <div>
        <input
          type="radio"
          name="searchBy"
          value="Name"
          checked={searchBy === "Name"}
          onChange={onOptionChange}
        />
        Name
        <input
          type="radio"
          name="searchBy"
          value="Email"
          checked={searchBy === "Email"}
          onChange={onOptionChange}
        />
        Email
        <input
          type="radio"
          name="searchBy"
          value="Location"
          checked={searchBy === "Location"}
          onChange={onOptionChange}
        />
        Location
        <input
          type="radio"
          name="searchBy"
          value="Id"
          checked={searchBy === "Id"}
          onChange={onOptionChange}
        />
        Id
      </div>
    </SearchContainer>
  );
};

export default Search;

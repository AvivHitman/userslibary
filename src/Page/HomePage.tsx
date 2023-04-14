import { useEffect, useState } from "react";
import UsersList from "../Components/usersList/UsersList";
import { Home } from "./Homepage.style";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUsersStatus, selectFilteredUsers, selectUsers } from "../store";
import { fetchUsers } from "../store/UsersDetailSlice";
import Search from "../Components/search/Search";
import { Title } from "../Components/common.style";

const HomePage = () => {
  const [isSearch, setIsSearch] = useState(false);
  const users = useAppSelector(selectUsers);
  const filteredUsers = useAppSelector(selectFilteredUsers);
  const status = useAppSelector(getUsersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const hansleOnSearch = (isSearch: boolean) => {
    setIsSearch(isSearch);
  };

  return (
    <Home>
      <Title theme={{ fontSize: "40px" }}>Users Libary</Title>
      <Search onSearch={hansleOnSearch} />
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "failed" ? (
        <div>Failed to fetch the data!</div>
      ) : (
        <UsersList users={isSearch ? filteredUsers : users} />
      )}
    </Home>
  );
};

export default HomePage;

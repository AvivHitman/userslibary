import { User } from "../../types";
import AddUser from "../addUser/AddUser";
import UserCard from "../userCard/UserCard";
import { CardList } from "./UsersList.style";

type UserListProps = {
  users: User[];
};

const UsersList = ({ users }: UserListProps) => {
  return users.length !== 0 ? (
    <>
      <AddUser />
      <CardList>
        {users?.map((user: User) => (
          <UserCard key={user.uuid} user={user} />
        ))}
      </CardList>
    </>
  ) : (
    <div>There is no users to display</div>
  );
};

export default UsersList;

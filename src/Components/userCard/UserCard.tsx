import { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../types";
import { removeUser } from "../../store/UsersDetailSlice";
import {
  Content,
  Card,
  IconsWrapper,
  Info,
  DeleteIcon,
  EditIcon,
} from "./UserCard.style";

import EditUser from "../editUser/EditUser";

type UserProps = {
  user: User;
};

const UserCard = ({ user }: UserProps) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <Card>
      <img src={user.picture} alt="" />
      <Content>
        <Info>
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <h3>{user.email}</h3>
          <h3>
            {user.location.country}, {user.location.city}
          </h3>
          <h3>
            {user.location.street.name} {user.location.street.number}
          </h3>
        </Info>
      </Content>

      <IconsWrapper>
        <EditIcon onClick={() => setShowEditModal(!showEditModal)} />
        <DeleteIcon
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?")) {
              dispatch(removeUser(user));
            }
          }}
        />
      </IconsWrapper>

      {showEditModal && (
        <EditUser user={user} onCancel={() => setShowEditModal(false)} />
      )}
    </Card>
  );
};

export default UserCard;

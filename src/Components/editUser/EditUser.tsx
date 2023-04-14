import { User } from "../../types";
import UserForm from "../userForm/UserForm";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/UsersDetailSlice";

type EditProps = {
  user: User;
  onCancel: () => void;
};

const EditUser = ({ user, onCancel }: EditProps) => {
  const initialValues = {
    name: {
      first: user.name.first,
      last: user.name.last,
      title: user.name.title,
    },
    location: {
      city: user.location.city,
      country: user.location.country,
      street: {
        name: user.location.street.name,
        number: user.location.street.number,
      },
    },
    picture: user.picture,

    email: user.email,
    uuid: user.uuid,
  };

  const dispatch = useDispatch();

  const handleOnSubmit = (values: User) => {
    const userCopy: User = { ...initialValues, ...values };
    dispatch(editUser(userCopy));
    onCancel();
  };

  return (
    <UserForm
      initialValues={initialValues}
      title={"Edit User"}
      onSubmit={handleOnSubmit}
      onCancel={onCancel}
    />
  );
};

export default EditUser;

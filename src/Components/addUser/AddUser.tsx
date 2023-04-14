import { useState } from "react";
import { User, UserTitle } from "../../types";
import { v4 as uuidv4 } from "uuid";
import UserForm from "../userForm/UserForm";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/UsersDetailSlice";
import { Button } from "../common.style";
const AddUser = () => {
  const initialValues: User = {
    name: {
      first: "",
      last: "",
      title: UserTitle.empty,
    },
    location: {
      city: "",
      country: "",
      street: {
        name: "",
        number: "",
      },
    },
    email: "",
    uuid: uuidv4(),
    picture: "",
  };

  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOnSubmit = (values: User) => {
    const userCopy: User = { ...initialValues, ...values };
    setShowAddModal(false);
    dispatch(addUser(userCopy));
  };

  return (
    <>
      <Button onClick={() => setShowAddModal(!showAddModal)}>Add User</Button>
      {showAddModal && (
        <UserForm
          initialValues={initialValues}
          title={"Add User"}
          onSubmit={handleOnSubmit}
          onCancel={() => setShowAddModal(false)}
        />
      )}
    </>
  );
};

export default AddUser;

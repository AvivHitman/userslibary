import { User } from "../../types";
import { selectUsers } from "../../store";
import { useAppSelector } from "../../store/hooks";
import * as Yup from "yup";

export const useUserForm = (initialValues: User) => {
  const users = useAppSelector(selectUsers);

  const isEmailExist = (email: String, uuid: String) => {
    let found = false;
    users.forEach((user: User) => {
      if (email === user.email && uuid !== user.uuid) {
        found = true;
      }
    });
    return found;
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .test(
        "is-email-exist",
        "Email is already exist",
        (value) => !isEmailExist(value, initialValues.uuid)
      ),
    name: Yup.object().shape({
      title: Yup.string().test(
        "is-title-empty",
        "Required",
        (value) => value !== "Title"
      ),
      first: Yup.string().required("Required").min(3, "Min of 3 characters"),
      last: Yup.string().required("Required").min(3, "Min of 3 characters"),
    }),
    location: Yup.object().shape({
      country: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      street: Yup.object().shape({
        name: Yup.string().required("Required"),
        number: Yup.string().required("Required"),
      }),
    }),
  });

  return { validateSchema };
};

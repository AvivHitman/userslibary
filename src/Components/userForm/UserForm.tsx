import { Form, Formik } from "formik";
import { User, UserTitle } from "../../types";
import { Container, Modal, Section } from "./UserForm.style";
import { useUserForm } from "./useUserForm";
import { Button, Title } from "../common.style";
import FormField from "../formField/FormField";

type UserFormProps = {
  onSubmit: (values: User) => void;
  onCancel: () => void;
  initialValues: User;
  title: String;
};

const UserForm = ({
  initialValues,
  title,
  onSubmit,
  onCancel,
}: UserFormProps) => {
  const { validateSchema } = useUserForm(initialValues);

  return (
    <Modal>
      <Title theme={{ fontSize: "25px" }}>{title}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={(values: User) => onSubmit(values)}
      >
        {({ values }) => (
          <Form>
            <Container>
              <Title theme={{ fontSize: "15px" }}>Personal Details:</Title>
              <Section>
                <FormField
                  value={values.name?.title}
                  name={"name.title"}
                  as="select"
                  options={Object.values(UserTitle)}
                ></FormField>

                <FormField
                  value={values.name?.first}
                  name="name.first"
                  placeholder="First name"
                ></FormField>

                <FormField
                  value={values.name?.last}
                  name={"name.last"}
                  placeholder="Last name"
                ></FormField>

                <FormField
                  value={values.email}
                  name={"email"}
                  placeholder="Email"
                ></FormField>
              </Section>
              <Title theme={{ fontSize: "15px" }}>Location Details:</Title>
              <Section>
                <FormField
                  value={values.location?.country}
                  name={"location.country"}
                  placeholder="Country"
                ></FormField>

                <FormField
                  value={values.location?.city}
                  name={"location.city"}
                  placeholder="City"
                ></FormField>

                <FormField
                  value={values.location?.street.name}
                  name={"location.street.name"}
                  placeholder="Street Name"
                ></FormField>

                <FormField
                  value={values.location?.street.number}
                  name={"location.street.number"}
                  placeholder="Street Number"
                ></FormField>
              </Section>
            </Container>

            <Button type="submit">Submit</Button>
            <Button type="button" onClick={onCancel}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UserForm;

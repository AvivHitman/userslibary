import styled from "styled-components";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { EditAlt } from "@styled-icons/boxicons-regular/EditAlt";

const Card = styled.div`
  margin: 10px;
  width: 50%;
  height: 70%;
  box-shadow: 0 8px 20px rgb(0 0 0 / 15%);
  border-radius: 6px;
  padding: 10px;
  background: white;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    object-fit: cover;
    display: flex;
    width: 7vw;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Info = styled.div`
  h3 {
    margin: 0;
    font-size: 1vw;
    color: #706f6f;
  }

  h2 {
    font-size: 1.2vw;
    color: black;
    font-weight: bold;
  }
`;

const IconsWrapper = styled.div`
  align-items: center;
  margin-right: 5px;
`;

const DeleteIcon = styled(Delete)`
  :hover {
    cursor: pointer;
  }
  padding: 0.6vw;
  width: 1.8vw;
  color: grey;
`;

const EditIcon = styled(EditAlt)`
  :hover {
    cursor: pointer;
  }
  padding: 0.6vw;
  width: 1.8vw;
  color: grey;
`;

export { Content, Card, Info, IconsWrapper, DeleteIcon, EditIcon };

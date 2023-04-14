import styled from "styled-components";

const EditModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 550px;
  width: 450px;
  background-color: #d6ddeb;
  color: black;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const WrapEdit = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
`;

const WrapButtons = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const ButtonCancel = styled.button`
  margin-left: 10px;
  background: red;
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px;
  width: 80px;
  cursor: pointer;
`;

const ButtonSave = styled.button`
  background: blue;
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px;
  width: 80px;
  color: white;
  cursor: pointer;
`;

export { EditModal, WrapEdit, WrapButtons, ButtonCancel, ButtonSave };
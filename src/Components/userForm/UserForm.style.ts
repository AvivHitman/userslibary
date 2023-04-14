import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 550px;
  width: 450px;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 10%;
  box-shadow: 0 8px 20px rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Modal, Section, Container };

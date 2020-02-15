import React, { useState } from "react"
import styled from "styled-components"
import Modal from "react-modal"
import Input from "./Form/Input"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    width: "90%",
    transition: "0.2s",
    padding: "1.2em 1.8em 2.4em 1.8em"
  }
}
function Header() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  function openModal() {
    setModalIsOpen(true)
  }
  function closeModal() {
    setModalIsOpen(false)
  }
  return (
    <Wrap>
      <div>
        <HeaderLeft>
          <Title>토트넘 홋스퍼 FC</Title>
          <Menu>
            <li>커뮤니티</li>
            <li>경기</li>
          </Menu>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={openModal}>로그인</Button>
        </HeaderRight>
        <Modal closeTimeoutMS={200} appElement={document.getElementById("root") as HTMLElement} isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <ModalTitle>로그인</ModalTitle>
          <X src={require("../assets/xIcon.png")} alt="x" width="24px" height="24px" onClick={closeModal} />
          <Input type="text" placeholder="이메일" style={{ margin: "7px 0px" }} />
          <Input type="password" placeholder="비밀번호" style={{ margin: "7px 0px" }} />
          <ModalLoginButton>로그인</ModalLoginButton>
          <ModalSignUpButton>회원가입</ModalSignUpButton>
          <SnsLine>
            <Line></Line>
            <SnsStart>SNS로 시작하기</SnsStart>
            <Line></Line>
          </SnsLine>
        </Modal>
      </div>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  width: 100%;
  height: 70px;
  background-color: #0f204b;
  padding: 0% 5%;
  & > div {
    max-width: 1300px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0% auto;
  }
`
const Title = styled.div`
  width: 164px;
  color: white;
  font-size: 20px;
`
const Menu = styled.ul`
  display: flex;
  color: white;
  list-style: none;

  & > li {
    width: 80px;
    margin: 0 5px;
    text-align: center;
  }
`
const Button = styled.div`
  width: 78px;
  height: 38px;
  color: #0f204b;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
`
const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const HeaderRight = styled.div``
const ModalTitle = styled.div`
  font-size: 30px;
  color: #0f204b;
  font-family: "NanumSB";
  margin: 0.6em 0 1.2em 0;
`
const X = styled.img`
  position: absolute;
  top: 2.1em;
  right: 1.8em;
`
const ModalLoginButton = styled.div`
  width: 100%;
  height: 41px;
  background-color: #0f204b;
  border: 1px solid #0f204b;
  border-radius: 4px;
  margin: 20px 0px 0px 0px;
  transition: 0.7s;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalSignUpButton = styled.div`
  width: 100%;
  height: 41px;
  background-color: white;
  border: 1px solid #0f204b;
  border-radius: 4px;
  margin: 7px 0px 0px 0px;
  transition: 0.7s;
  color: #0f204b;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Line = styled.div`
  height: 1px;
  width: 33%;
  background-color: #0f204b;
`
const SnsLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.6em 0em;
`
const SnsStart = styled.div`
  font-family: "NanumSB";
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: fit-content;
  color: #494949;
  word-break: keep-all;
`

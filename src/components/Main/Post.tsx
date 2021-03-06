import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { authStoreContext } from "../../stores/auth"
import { postStoreContext } from "../../stores/post"

interface Data {
  _id: string
  title: string
  text: string
  username: string
  time: string
  userId: string
  type: string
}

const Text = observer(() => {
  const history = useHistory()
  const postStore: any = useContext(postStoreContext)
  useEffect(() => {
    postStore.FindAll().then((result: any) => {})
  }, [])
  function Page(_id: string) {
    history.push(`/postlist/${_id}`)
  }
  return (
    <>
      {postStore.Lists.adminLists.splice(0, 5).map((data: Data, index: number) => {
        return (
          <Notice key={index} onClick={() => Page(data._id)}>
            <NoticeBox>공지</NoticeBox>
            <NoticeText>{data.title}</NoticeText>
          </Notice>
        )
      })}
      {postStore.Lists.basicLists.splice(0, 17).map((data: Data, index: number) => {
        return (
          <BoradText key={index} onClick={() => Page(data._id)}>
            <Flex>
              <img src={require("../../assets/ico.gif")} alt="점" width="3px" height="3px;" style={{ backgroundColor: "black", marginRight: "10px" }} />
              <BoradTitle>{data.title}</BoradTitle>
            </Flex>
            <Flex>
              <BoradWriter>{data.username}</BoradWriter>
              <BoradDate>{data.time.substr(0, 10)}</BoradDate>
            </Flex>
          </BoradText>
        )
      })}
    </>
  )
})
interface props {
  expansion: boolean
}
const Post = observer(({ expansion }: props) => {
  const authStore = useContext(authStoreContext)

  const history = useHistory()
  function HistoryWrite() {
    history.push("/postwrite")
  }
  function HistoryBoard() {
    window.scrollTo(0, 0)
    history.push("/post")
  }

  return (
    <Wrap>
      <TitleWrap>
        <Title expansion={expansion}>게시판</Title>
        <div style={{ display: "flex" }}>
          {authStore.tokenState === true ? <TitleCreate onClick={HistoryWrite}>글쓰기</TitleCreate> : ""}
          <TitleView expansion={expansion} onClick={HistoryBoard}>
            더보기
          </TitleView>
        </div>
      </TitleWrap>
      <TitleLine>
        <TextWrap>
          <Text></Text>
        </TextWrap>
      </TitleLine>
    </Wrap>
  )
})

export default Post

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 980px;
  max-height: 650px;
  flex-direction: column;
  overflow-y: hidden;
  @media only screen and (max-width: 1445px) {
    min-width: 100%;
  }
  margin-bottom: 10px;
`
const Title = styled.div`
  font-size: ${(props: props) => (props.expansion === true ? "28px" : "20px")};
  font-family: "NanumSRB";
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleLine = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1.5px solid black;
  margin-top: 5px;
  display: flex;
`
const TitleWrap = styled.div`
  display: flex;
  min-height: 28px;
  justify-content: space-between;
`
const TitleCreate = styled.div`
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #0f204b;
  width: 62px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 9.5px;
  cursor: pointer;
  font-weight: 800;
  margin-left: 5px;
`

const TitleView = styled.div`
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #0f204b;
  width: 62px;
  height: 27px;
  display: ${(props: props) => (props.expansion === true ? "none" : "flex")};
  color: white;
  justify-content: center;
  align-items: center;
  padding: 5px 9.5px;
  cursor: pointer;
  font-weight: 800;
  margin-left: 5px;
  background-color: #0f204b;
`
const TextWrap = styled.div`
  width: 100%;
  height: 100%;
`
const Notice = styled.div`
  width: 100%;
  height: 36px;
  padding: 5px 10px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #f4efff;
  cursor: pointer;
`
const NoticeBox = styled.div`
  height: 22px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffc6c9;
  color: #ff4e59;
  background-color: #ffe3e4;
  font-weight: 800;
  font-size: 11px;
  border-radius: 3px;
`
const NoticeText = styled.div`
  font-size: 13px;
  color: #ff4e59;
  font-weight: 800;
  margin-left: 10px;
`
const BoradText = styled.div`
  width: 100%;
  height: 36px;
  padding: 5px 10px;
  background-color: white;
  box-sizing: border-box;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2px solid #f4efff;
  cursor: pointer;
`
const BoradWriter = styled.div`
  margin-right: 35px;
  text-align: center;
`
const BoradTitle = styled.div``
const BoradDate = styled.div``
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

import { observable, action } from "mobx"
import { createContext } from "react"
import Axios from "../libs/axios"
class authStore {
  @observable state: boolean = false
  @observable tokenState: boolean = false
  @observable adminState: boolean = false

  @action signUp: any = async (id: string, pwd: string, pwd2: string, username: string, email: string, terms: boolean, profile__expansion: string) => {
    var turn: any
    await Axios.Post("/account/signup", { id, pwd, pwd2, username, email, terms, profile__expansion })
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {
        console.log(err)
      })
    return turn
  }
  @action signIn: any = async (id: string, pwd: string, pwd2: string, username: string, email: string, terms: boolean, profile__expansion: string) => {
    var turn: any
    await Axios.Post("/account/signin", { id, pwd })
      .then((result: any) => {
        console.log(result)
        turn = result
      })
      .catch((err: any) => {
        console.log(err)
      })
    return turn
  }
  @action profile: any = async (profile: any) => {
    var turn: any
    await Axios.Post("/account/profile", profile)
      .then((result: any) => {
        turn = result
      })
      .catch((err: any) => {
        console.log(err)
      })
    return turn
  }
  @action token = async (token: any) => {
    var turn: any
    await Axios.Post("/account/token", { token: token })
      .then((result: any) => {
        if (result.data.state) {
          this.tokenState = true
          turn = result.data.data
          if (result.data.admin === true) {
            this.adminState = true
          } else {
            this.adminState = false
          }
        } else {
          this.tokenState = false
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
    return turn
  }
}
//아이디 중복 해결하기
export const authStoreContext = createContext(new authStore())

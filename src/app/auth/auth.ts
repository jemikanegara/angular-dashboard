export interface Login {
  username: string,
  password: string
}

export const ValidLoginData: Login = {
  username: "admin",
  password: "admin"
}

export interface Token {
  token: string
}

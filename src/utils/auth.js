import auth0 from "auth0-js"

export const isBrowser = typeof window !== "undefined"

const tokens = {
  idToken: false,
  accessToken: false,
}

let user = {}

export const isAuthenticated = () => {
  return tokens.idTokens !== false
}

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMNAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

export const login = () => {
  auth.authorize()
}

export const logout = () => {
  tokens.accessToken = false;
  tokens.idToken = false;
  user = {}
  
  auth.logout()
}


const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    if (err.error === "login_required") {
      login()
    }
  }

  if (authResult && authResult.accessToken && authResult.idtoken) {
    tokens.idToken = authResult.idToken
    tokens.accessToken = authResult.accessToken

    auth.client.userInfo(tokens.accessToken, (_err, userProfile) => {
      user = userProfile

      cb()
    })
  }
}

export const checkSession = callback => {
  auth.checkSession({}, setSession(callback))
}

export const handelAuthentication = () => {
  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}

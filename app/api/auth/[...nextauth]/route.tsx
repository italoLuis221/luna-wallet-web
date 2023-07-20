import NextAuth from "next-auth"
const handler = NextAuth({
    providers: [
        {
            id: "luna-wallet-api",
            name: "luna-wallet",
            type: "oauth",
            authorization: "http://127.0.0.1/oauth/authorize",
            token: "https://127.0.0.1/oauth/token",
            userinfo: "https://127.0.0.1/v2/user/me",
            profile(profile) {
              return {
                id: profile.id,
                name: profile.nome?.profile.nickname,
                email: profile.email?.email,
              }
            },
        }
    ]
})
  
  export { handler as GET, handler as POST }
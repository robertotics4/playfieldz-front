// import { NextResponse } from 'next/server'
// import {
//   NextAuthMiddlewareOptions,
//   NextRequestWithAuth,
//   withAuth,
// } from 'next-auth/middleware'

// const middleware = (request: NextRequestWithAuth) => {
//   if (!request.nextauth?.token) { // Verifica se o usuário não está autenticado
//     return NextResponse.redirect('/') // Redireciona para a página de login
//   }
// }
// const callbackOptions: NextAuthMiddlewareOptions = {}

// export default withAuth(middleware, callbackOptions)
// export const config = { matcher: '/private' }

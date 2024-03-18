export const BASE_URL = 'http://localhost:5000'

//user routes
export const registerUserRoute = `${BASE_URL}/api/users/signup`
export const loginUserRoute = `${BASE_URL}/api/users/login`
export const logoutUserRoute = `${BASE_URL}/api/users/logout`

//message routes
export const addMessageRoute = `${BASE_URL}/api/message/add`
export const getAllMessageRoute = `${BASE_URL}/api/message`
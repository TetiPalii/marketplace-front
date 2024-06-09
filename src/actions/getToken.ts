import Cookies from "js-cookie";

const token = Cookies.get('Authorization');
export async function getToken(setToken) {
  
    setToken(token)
    return token;
  
}

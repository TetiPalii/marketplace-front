// import Cookies from "js-cookie";

// const token = Cookies.get('Authorization');
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getUser = async (setUser) => {
//     if (!token) {
//        return
//    }
//     try {
        
//             const res = await fetch(`https://marketplace-5ihn.onrender.com/api/v1/my-profile/info`,{
//             method: "GET",
//             headers: { "Authorization": `Bearer ${token}`},
//         })
//         if (!res.ok) {
//     throw new Error(res.statusText)
//         }
//         const user = await res.json()
//       setUser(user) 
        
        
     
//     } catch (error) {
//         console.log(error)
//     }
   
//     }

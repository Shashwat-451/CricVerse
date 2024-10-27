// import { toast } from "react-hot-toast"

// import { setLoading, setToken } from "../../redux/slices/AuthSlice.js"
// import { setUser } from "../../redux/slices/profileSlice.js"
// import { apiConnector } from "../apiConnector"
// // import { authAPIs} from "../apis"

// // const {
// //   SIGNUP_API,
// //   LOGIN_API,
// // } = authAPIs


// export function signUp(
//   formData,
//   navigate
// ) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", SIGNUP_API, formData)

//       console.log("SIGNUP API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }
//       toast.success("Signup Successful")
//       navigate("/login")
//     } catch (error) {
//       console.log("SIGNUP API ERROR............", error)
//       toast.error("Signup Failed")
//       navigate("/signup")
//     }
//     dispatch(setLoading(false))
//     toast.dismiss(toastId)
//   }
// }

//   //Query:
//  //Frontend (login Page) => Backend Call 
// // Frontend (login page)=> Services(operations) => apiConnector =>Backend Call

//  //Response:
// // Backend Page => Frontend (set User)
// //Api Connector (returns axios instance) => Services (receives data, set user, set token)


// export function login(formData,navigate) {
 
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", LOGIN_API, formData)

//       console.log("LOGIN API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Login Successful")
//       dispatch(setToken(response.data.token))
//       const userImage = response.data?.user?.image
//         ? response.data.user.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
//       dispatch(setUser({ ...response.data.user, image: userImage }))
//       localStorage.setItem("token", JSON.stringify(response.data.token))
//       navigate("/")
//     } catch (error) {
//       console.log("LOGIN API ERROR............", error)
//       toast.error("Login Failed")
//     }
//     dispatch(setLoading(false))
//     toast.dismiss(toastId)
//   }
// }

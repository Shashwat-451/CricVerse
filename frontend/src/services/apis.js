
const BASE_URL = "http://localhost:5000/api/v1"

export const authAPIs= {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/signup",
    LOGIN_API: BASE_URL + "/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }
  export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
    GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
  }
  
  export const players={
    GET_PLAYERS:"https://cricbuzz-cricket.p.rapidapi.com/teams/v1/",
    GET_RANKINGS:"https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/",
     GET_IMAGE:"https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/",
     GET_PLAYER_STATS:"https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/"
  }
const endpoint = {
  login: "/api/users/login",
  getOTP: "/api/users/generate-otp",
  forgotPassword: "/api/users/forgot-password",
  getUsers: "/api/users/get-all",
  lockAccount: "/api/users/change-account-status",
  deleteUser: "/api/users/delete",
  createUser: "/api/users/create",
  changePassword: "/api/users/change-password",
  getProfile: "/api/users/get-profile-by-token",
  getProvinces: "/api/administrative-units/get-provinces",
  getDistricts: "/api/administrative-units/get-districts",
  getWards: "/api/administrative-units/get-wards",
}

export default endpoint

const apiEndPoints = {
    register: "api/register",
    login: "api/login",
    getUser: "api/user-profile",
    addData:"api/profile",
    allUsers:"/api/users?order=desc&pagination=100&page=1&order_by=email",
    allUser:"api/users?page=2"
}

export default apiEndPoints;
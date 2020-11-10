const userInfoKey = Symbol('userInfo')

export function saveUserInfo(userInfo){
    localStorage.setItem(userInfoKey.toString(), JSON.stringify(userInfo))
}

export function getUserInfo(){
    return JSON.parse(localStorage.getItem(userInfoKey.toString()))
}

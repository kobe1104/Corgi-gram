
export const logIn = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: '/api/session',
    data: user,
    success,
    error
  })
}

export const signUp = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: '/api/users',
    data: user,
    success,
    error
  })
}

export const logOut = (success) => {
  $.ajax({
    method: "DELETE",
    url: '/api/session',
    success,
    error: () => {console.log('logout error')}
  })
}

import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('user', {
      params: {
        search: search
      }
    })
  },
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  delete (user) {
    return Api().delete(`user/${user.id}`, user)
  }
}

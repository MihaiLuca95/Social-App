import  User  from "../model/User";

export default class APIService {
  static getData(options) {
    return fetch(`http://localhost:3001${options.route}`, options)
      .then(response => response.json())
      .then(data => new User(data.nickname, data.avatar, data.lastOnline));
  }
}

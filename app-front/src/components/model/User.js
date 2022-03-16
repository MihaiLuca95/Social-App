// model/User module
class User {
  constructor(nickname, avatar, lastOnline) {
    this.nickname = nickname;
    this.avatar = avatar;
    this.lastOnline = lastOnline;
  }

  // dynamic / non-static 
  static get() {
    return fetch('/data/user.json')
      .then(response => response.json())
      .then(data => new User(data.nickname, data.avatar, data.lastOnline));
  }
}

export { User } ;
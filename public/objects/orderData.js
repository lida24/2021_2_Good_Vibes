class User {
  email;

  username;

  avatar;

  // country: 'country',
  // region: 'region',
  // city: 'city',
  // street: 'street',
  // house: 'house',
  // flat: 'flat',
  // index: 'index'

  set({ email, username, avatar }) {
    this.email = email;
    this.username = username;
    this.avatar = avatar;
  }

  delete() {
    this.email = undefined;
    this.username = undefined;
    this.avatar = undefined;
  }
}

export default new User();
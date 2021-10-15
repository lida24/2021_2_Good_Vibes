class User {
  email;

  username;

  set({ email, username }) {
    this.email = email;
    this.username = username;
  }
}

export default new User();

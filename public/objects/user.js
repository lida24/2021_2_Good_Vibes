class User {
  email;

  username;

  set({ email, username }) {
    this.email = email;
    this.username = username;
  }

  delete() {
    this.email = undefined;
    this.username = undefined;
  }
}

export default new User();

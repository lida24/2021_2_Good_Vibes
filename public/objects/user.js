class User {
  email;

  username;

  set({ email, username }) {
    this.email = email;
    this.username = username;
  }

  delete() {
    this.email = '';
    this.username = '';
  }
}

export default new User();

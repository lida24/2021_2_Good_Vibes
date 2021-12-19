class User {
  public email: string;

  public username: string;

  public avatar: string;

  private autorize = false;

  public birth_day: string;

  public set(obj: {
    'email': string,
    'username': string,
    'avatar': string,
    'birth_day': string
  }): void {
    const { email, avatar, username, birth_day } = obj;
    this.email = email || this.email;
    this.username = username || this.username;
    this.avatar = avatar || this.avatar;
    this.birth_day = birth_day || this.birth_day;
    this.autorize = true;
  }

  public delete(): void {
    this.email = undefined;
    this.username = undefined;
    this.avatar = undefined;
    this.birth_day = undefined;
    this.autorize = false;
  }

  public isAutorize(): boolean {
    return this.autorize;
  }
}

export default new User();

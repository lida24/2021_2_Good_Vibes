class Redirect {
  private savedState = 'homepage';

  public saveState(obj: { 'state'?: string }): void {
    const { state } = obj;
    if (state) {
      this.savedState = state;
    }
  }

  public popSavedState(): string {
    const res = this.savedState;
    this.savedState = 'homepage';
    return res;
  }
}

export default new Redirect();

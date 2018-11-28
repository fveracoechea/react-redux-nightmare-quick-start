class Result {
  constructor(go) {
    this.go = go;
  }

  static Ok(v) {
    return new this((onSuccess, _) => onSuccess(v));
  }

  static Err(r) {
    return new this((_, onFailure) => onFailure(r));
  }

  map(f) {
    return this.go(v => Result.Ok(f(v)), r => Result.Err(r));
  }

  chain(f) {
    return this.go(v => f(v), r => Result.Err(r));
  }

  unwrap() {
    return this.go(v => (v, r) => { throw r; });
  }
}

export default Result;

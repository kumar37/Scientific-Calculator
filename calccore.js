let myCalc = {
  input1: '',
  input2: '',
  currentOperation: '',
  result: '',
  // intentionally return to show ES6 way of writing JS methods
  strToNumConvert(val) {
    return parseInt(val);
  },
  add() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 + temp2);
  },
  mul() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 * temp2);
  },
  sub() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 - temp2);
  },
  div() {
    let temp1 = this.strToNumConvert(this.input1),
      temp2 = this.strToNumConvert(this.input2);
    return (this.result = temp1 / temp2);
  },
};

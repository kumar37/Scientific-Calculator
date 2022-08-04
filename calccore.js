let myCalc = {
  input1: '',
  input2: '',
  currentOperation: '',
  result: '',
  // intentionally return to show ES6 way of writing JS methods
  strToNumConvert(val) {
    return parseInt(val);
  },
  // accessor property(getter)
  get getinput1() {
      return this.strToNumConvert(this.input1);
  },
  // accessor property(getter)
  get getinput2() {
    return this.strToNumConvert(this.input2);
 },
 //accessor property(setter)
 set setinput1(newInput1) {
  this.input1 = newInput1;
},
//accessor property(setter)
set setinput2(newInput2) {
  this.input2= newInput2;
},
  pow() {
    return (this.result = Math.pow(this.getinput1, this.getinput2));
  },
  sin() {
    return (this.result = Math.sin(this.getinput1));
  },
  cos() {
    return (this.result = Math.cos(this.getinput1));
  },
  tan() {
    return (this.result = Math.tan(this.getinput1));
  },
};

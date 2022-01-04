function typeExpressions() {
  function greeter(callback: (a: string) => void) {
    callback('Hello world!');
  }

  type Greeter = (a: string) => void;
  function secondGreeter(fn: Greeter) {
    fn('Hello, !Dlrow');
  }

  function printer(text: string) {
    console.log(text);
  }

  greeter(printer);
  secondGreeter(printer);
}

function callSignature() {
  type NumberChecker = {
    (argument: number): boolean;
  };

  function callSomething(fn: NumberChecker) {
    console.log('saying that 5 is', fn(5));
  }

  const isOdd: NumberChecker = (n: number) => {
    return false;
  };

  callSomething(isOdd);
}

function generics() {
  const numbers: Array<number> = [100, 339, 999, 20];
  const letters: Array<string> = ['lorp', 'gensl', 'dolr'];

  function getFirstItem <Type>(array: Type[]): Type {
    return array[0];
  }

  let v1 = getFirstItem(numbers);
  console.log(typeof v1, v1);
  let v2 = getFirstItem(letters);
  console.log(typeof v2, v2);
}

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));




typeExpressions();
callSignature();
generics();

function logger(...args: any) {
  const file: string = __filename.split('\\').reverse()[0];
  console.log(file, ':', ...args);
}

function paddingText(padding: string | number, input: string) {
  let text: string = '';
  if (typeof padding === 'number') {
    text = new Array(padding + 1).join(' ') + input;
  } else {
    text = padding + input;
  }
  logger(text);
}

function assignments() {
  let value = Math.random() > 0.5 ? 1 : '0';
  // value = false; // cannot be done cause variable is already a number or string
  logger(value);
  value = 'Assignments are cool :)';
  logger(value);
}

function instanceOfSomething(x: Date | string) {
  if (x instanceof Date) {
    logger(x.toUTCString());
  } else {
    logger(x.toUpperCase());
  }
}

function predicates() {
  type Fish = {
    swim: () => void;
  };
  type Bird = {
    fly: () => void;
  };

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  let animal: Fish = { swim: () => ({}) };
  logger(isFish(animal));
}

// Discriminated unions

function discriminatedUnions() {
  /* 
    This will cause errors because typescript doesn't know wether
    radius or sideLength different than undefined
  interface Shape {
    kind: 'circle' | 'square';
    radius?: number;
    sideLength?: number;
  }
  */
  interface Square {
    kind: 'square';
    sideLength: number;
  }
  interface Circle {
    kind: 'circle';
    radius: number;
  }
  type Shape = Circle | Square;

  function calculateArea(shape: Shape) {
    if (shape.kind === 'circle') {
      return Math.PI * shape.radius ** 2;
    }
    return shape.sideLength ** 2;
  }
  let sqr: Shape = { kind: 'square', sideLength: 20 };
  logger(calculateArea(sqr));
}

paddingText(12, 'any name');
assignments();
instanceOfSomething(new Date());
instanceOfSomething('Today is a GooD day');
predicates();
discriminatedUnions();

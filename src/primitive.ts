const file: string = __filename.split('\\').reverse()[0];
const text: string = 'my current text';
const num: number = 10; // there's no such thing as int or float
const bigNum: bigint = BigInt(100);
const list: Array<number> = [];

const obj: any = { o: 'cool' };

console.log(file, text, num, bigNum, list, obj);

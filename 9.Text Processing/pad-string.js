let bits = ['101', '11', '100000', '1010011'];

for (const bit of bits) {

    console.log(bit.padStart(8, '0'));
    console.log(bit.padEnd(8, '0'));
}
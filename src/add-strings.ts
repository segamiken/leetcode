function addStrings(num1: string, num2: string): string {
    let res: number[] = [];
    let carry: number = 0;
    
    let p1: number = num1.length -　1;
    let p2: number = num2.length - 1;
    
    while (p1 >= 0 || p2 >= 0) {
        let x1: number = p1 >= 0 ? Number(num1.charAt(p1)) : 0;
        let x2: number = p2 >= 0 ? Number(num2.charAt(p2)) : 0;
        let value: number = (x1 + x2 + carry) % 10;
        carry = (x1 + x2 + carry) / 10　>= 1 ?  Math.floor((x1 + x2 + carry) / 10) : 0;
        res.unshift(value);
        p1 --;
        p2 --;
    }
    
    if (carry > 0) {
        res.unshift(carry);
    }
    
    return res.join("");
};

console.log(addStrings("9", "9"));
function gateOutput(){
    var i1=parseInt(document.getElementById("input1").value);
    var i2=parseInt(document.getElementById("input2").value);
    var gt=document.getElementById("gatetype").value;
    var o;
    switch (gt) {
        case "and":
            o = i1 && i2; // Logical AND
            break;
        case "or":
            o = i1 || i2; // Logical OR
            break;
        case "xor":
            o = (i1 !== i2); // Logical XOR
            break;
        case "xnor":
            o = (i1 === i2); // Logical XNOR
            break;
        case "nand":
            o = !(i1 && i2); // Logical NAND
            break;
        case "nor":
            o = !(i1 || i2); // Logical NOR
            break;
    }
    document.getElementById("output").value=o;
}
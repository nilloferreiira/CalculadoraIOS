function insert(num){
    var res = document.getElementById('return-nb').innerHTML;
    document.getElementById('return-nb').innerHTML = res +  num;
    if(res === "0") {
        document.getElementById('return-nb').innerHTML = num;
    }

    if(res === "0" && num == ".") {
        document.getElementById('return-nb').innerHTML = "0.";
    } 
}

function clean() {
    document.getElementById('return-nb').innerHTML = 0;
}

function swc() {
    var num = document.getElementById('return-nb').innerHTML;
    if(num > 0){
        document.getElementById('return-nb').innerHTML = -num;
    }else{
        document.getElementById('return-nb').innerHTML = Math.abs(num);
    }

}

function porcent() {
    var res = document.getElementById('return-nb').innerHTML;
    var res = parseInt(res);
    var calc = res/100
    document.getElementById('return-nb').innerHTML = calc;
    
}

function calc() {
    var res = document.getElementById('return-nb').innerHTML;
    var novaRes = res.replace("x", "*")
    
    if(novaRes) {
        document.getElementById('return-nb').innerHTML = eval(novaRes)
    }
}

/**
 * Created by SADIQ on 10.03.2019.
 */


function print(str) {

    return console.log(str);
}

function power(num1,num2) {

    return Math.pow(num1,num2);
}

function drawLine(cntTabs,cntSymbols,tab,symbol) {
    var tabs ='';
    var symbols='';
    for(var i=0;i<cntTabs;i++){
        tabs += tab;
    }
    for(var j=0;j<cntSymbols;j++){
        symbols += symbol;
    }
    print(tabs+symbols);

}


function makeAdd(base) {
    
    return function (num) {
        return num+base;
    }
}


function compare(x) {

    return function (y) {

        if(x>y){
            return true;
        }

        if(x<y){
            return false;
        }
        if(x===y){
            return null;
        }
    }

}

//bu rekursiv funksiyadir ve ozu-ozunu sherte uygun olaraq lazimi qeder ishe salir
function countLine(count) {

    if(count>10){
        return;
    }else {
     print('Line'+count++);
     countLine(count);
    }



}





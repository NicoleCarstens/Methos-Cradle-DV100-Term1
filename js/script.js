function decCount(){
    //Get the num input
    let num = document.getElementById('inputVal').value;
    if (num > 0){  //dec value
        num--;
    }
    //push value
    document.getElementById('inputVal').value = num;
}

function incCount(){
        //Get the num input
    let num = document.getElementById('inputVal').value;
    //inc value
        num++;
    //push value
    document.getElementById('inputVal').value = num;

}




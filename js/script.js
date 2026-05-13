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

let form = document.forms['contactForm'];
form.addEventListener("submit", getValues);

function getValues(event){
event.preventDefault();


    let contactData = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "subject": document.getElementById('subject').value,
        "message": document.getElementById('message').value
    };

     console.log(contactData);

     let output = `<p>Thank you <strong>${contactData.name}</strong>, we have received your message and will get back to you shortly.</p>`

     document.querySelector(".code").innerHTML = output;
     
        
form.reset();

}


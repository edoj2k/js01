let xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "./users.json", true);

xmlhttp.onload = function() {
    if(this.status == 200) {
        let myData = JSON.parse(this.responseText);
        console.log(myData);
    }
}

xmlhttp.send();
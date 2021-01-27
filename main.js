let custArray = [];
let cityArray = ["Bellevue", "Seattle", "Redmond"];

document.addEventListener("DOMContentLoaded", function (event) {

    let mySelect = document.getElementById("citylist");

    for (let i = 0; i < cityArray.length; i++){
        let anotherOption = document.createElement("option");
        anotherOption.appendChild(document.createTextNode(cityArray[i]));
        mySelect.appendChild(anotherOption);
    }

});


function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("citylist").value;
    let paytype = document.getElementById("paytype").value;
    let cust = name + " " + city + " " + paytype;
    custArray.push(cust);

    let myUl = document.getElementById("list");
    myUl.innerHTML = "";
    for (let i = 0; i < custArray.length; i++){
        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(custArray[i]));

        myUl.appendChild(anotherLi);
    }
    }

   



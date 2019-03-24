var sayac = 0;

var btnAdd = document.querySelector('#btnAdd');

btnAdd.addEventListener('click', function () {

    var productName = document.querySelector('.txtProduct').value;
    var price = document.querySelector('.txtPrice').value;
    var description = document.querySelector('.txtDescription').value;

    console.log(productName);
    console.log(price);
    console.log(description);

    if (description == "-1" || description == "") {

        alert("Please select a category ! ");

    } else {


        /*Table*/

        var txtproductName = document.createTextNode(productName);
        var txtprice = document.createTextNode(price);
        var txtdescription = document.createTextNode(description);

        /*id Register*/
        var todoList = document.querySelector(".tableContent");
        var parentTr = todoList.childNodes;
        var trSayac = parentTr.length;
        localStorage["storageIdReg"] = trSayac;


        var tableContent = document.querySelector('.tableContent');
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        var txtSayac = document.createTextNode(trSayac);
        td.appendChild(txtSayac);
        tr.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(txtproductName);
        tr.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(txtprice);
        tr.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(txtdescription);
        tr.appendChild(td);
        
        tableContent.appendChild(tr);
        
        /*
        var td = document.createElement('td');
        var span=document.createElement('span');
        var deleteSpan=document.createTextNode('x');
        span.appendChild(deleteSpan);
        td.appendChild(span);
        tr.appendChild(td);

        tableContent.appendChild(tr);
        
        span.onclick=function(){
            
            console.log("span-test");
            var parentTd=this.parentElement;
            var parentTr=parentTd.parentElement;
            console.log(parentTr);
            parentTr.style.display='none';
            saveList();
            
        }
        */
        

        saveList();
        Reset();
    }

});


document.addEventListener("DOMContentLoaded", refreshList, false);

function refreshList() {
    var list = localStorage["storageList"];
    if (list != undefined) {
        document.querySelector(".tableContent").innerHTML = list;
    }
}


var diziTest = [];

var arrayId = [];
var arrayProduct = [];
var arrayPrice = [];
var arrayDescription = [];
var start = 0;

function saveList() {

    var todoList = document.querySelector(".tableContent");
    var parentTr = todoList.childNodes;
    console.log(parentTr);
    var trSayac = parentTr.length;
    start++;
    console.log(trSayac);




    for (var i = start; i < trSayac; i++) {
        var oluyo = parentTr[i].childNodes[0].innerHTML;
        arrayId.push(oluyo);
        console.log(arrayId);
    }
    for (var i = start; i < trSayac; i++) {
        var oluyo = parentTr[i].childNodes[1].innerHTML;
        arrayProduct.push(oluyo);
    }
    for (var i = start; i < trSayac; i++) {
        var oluyo = parentTr[i].childNodes[2].innerHTML;
        arrayPrice.push(oluyo);
    }
    for (var i = start; i < trSayac; i++) {
        var oluyo = parentTr[i].childNodes[3].innerHTML;
        arrayDescription.push(oluyo);
    }

    console.log(arrayId);


    localStorage["storageListId"] = arrayId;
    localStorage["storageListProductN"] = arrayProduct;
    localStorage["storageListPrice"] = arrayPrice;
    localStorage["storageListDescription"] = arrayDescription;

    console.log(todoList);
    console.log("test");
    var satir1 = todoList.childNodes[1].innerHTML;
    diziTest.push(satir1);
    console.log(satir1);
    console.log("test");
    console.log(diziTest);

    var tableContent = document.querySelector(".tableContent").innerHTML;
    localStorage["storageList"] = tableContent;
    console.log(tableContent);

}

function Reset() {
    document.querySelector('.txtProduct').value = '';
    document.querySelector('.txtPrice').value = '';
    document.querySelector('.txtDescription').value = '';

}

document.addEventListener("DOMContentLoaded", refreshList2, false);

function refreshList2() {

    var list = localStorage["storageListId"];
    var list2 = localStorage["storageListProductN"];
    var list3 = localStorage["storageListPrice"];
    var list4 = localStorage["storageListDescription"];

    //productArray length
    var sonucTest = list.split(",");
    console.log(sonucTest.length);

    if (list != undefined) {

        /*
        <div class="bg-primary d-inline-block m-2 p-2">
        <h1>Product Name</h1>
        <h2>Descripsion</h2>
        <span>Price</span>
        </div>
        */

        var idReg = localStorage["storageIdReg"];

        for (var i = 0; i < idReg; i++) {

            var productContent = document.querySelector('.product-list');

            var div = document.createElement('div');
            var img = document.createElement('img');
            var h1 = document.createElement('h1');
            var p = document.createElement('p');
            var h2t = document.createElement('h2');
            var span = document.createElement('span');
            var hr = document.createElement('hr');
            div.className = 'bg-light d-inline-block m-3 p-4 w-50';
            img.src = 'https://via.placeholder.com/100';
            img.className = 'mb-5';
            var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            div1.className = 'd-inline-block m-2';
            div2.className = 'd-inline-block m-2';
            h2t.className = 'text-right mb-3';



            var sonuc1 = list.split(",");
            console.log(sonuc1[i]);
            var sonuc2 = list2.split(",");
            console.log(sonuc2[i]);
            var sonuc3 = list3.split(",");
            console.log(sonuc3[i]);
            var sonuc4 = list4.split(",");
            console.log(sonuc4[i]);

            var txtId = sonuc1[i];
            var txtPn = sonuc2[i];
            var txtPr = sonuc3[i];
            var txtDe = sonuc4[i];

            var txtId1 = document.createTextNode(txtId+' - ');
            var txtPn1 = document.createTextNode(txtPn);
            var txtPr1 = document.createTextNode(txtPr);
            var txtDe1 = document.createTextNode(txtDe);

            
            h2t.appendChild(txtId1);
            div1.appendChild(h2t);
            div1.appendChild(img);
            
            h1.appendChild(txtPn1);
            p.appendChild(txtDe1);
            span.appendChild(txtPr1);
            div2.appendChild(h1);
            div2.appendChild(hr);
            div2.appendChild(p);
            div2.appendChild(span);

            div.appendChild(div1);
            div.appendChild(div2);

            productContent.appendChild(div);

        }
    }
}

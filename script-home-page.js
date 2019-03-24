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
        <p>Descripsion</p>
        <span>Price</span>
        </div>
        */

        var idReg = localStorage["storageIdReg"];

        for (var i = 0; i < idReg; i++) {

            var productContent = document.querySelector('.product-list');

            var div = document.createElement('div');
            var img = document.createElement('img');
            var h1 = document.createElement('h2');
            var p = document.createElement('p');
            var h2t = document.createElement('h2');
            var p2 = document.createElement('p');
            var hr = document.createElement('hr');
            var span = document.createElement('span');

            div.className = 'bg-light d-inline-block m-3 p-4 w-25 h-25';

            img.src = 'https://via.placeholder.com/200';
            img.className = 'w-75';

            var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            div1.className = 'm-2 text-center d-inline';
            div2.className = 'm-2 text-center d-inline';

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

            //var txtId1 = document.createTextNode(txtId+' - ');
            var txtPn1 = document.createTextNode(txtPn);
            var txtPr1 = document.createTextNode('Price : ' + txtPr);
            var txtDe1 = document.createTextNode('Category : ' + txtDe);


            //h2t.appendChild(txtId1);
            //div1.appendChild(h2t);
            span.appendChild(img);
            div1.appendChild(span);

            h1.appendChild(txtPn1);
            p.appendChild(txtDe1);
            p2.appendChild(txtPr1);
            div2.appendChild(h1);
            div2.appendChild(hr);
            div2.appendChild(p);
            div2.appendChild(p2);

            div.appendChild(div1);
            div.appendChild(div2);

            productContent.appendChild(div);

        }
    }
}

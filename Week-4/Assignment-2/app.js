function ajax(src, callback) {
    let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                return callback(JSON.parse(xhr.responseText));
            }
        }
    xhr.open("GET", src);
    xhr.send();
}

function render(data) {
    for (let i = 0; i < data.length; i++) {
        let h3 = [];
        let name = [];
        let price = [];
        let description = [];
        let item = [];
        let br = []; // line-break
        let br1 = []; // line-break
        h3[i] = document.createElement("h3"); // create h2 element
        br[i] = document.createElement("br");
        br1[i] = document.createElement("br");
        name[i] = document.createTextNode(data[i].name);
        price[i] = document.createTextNode(`$ ${data[i].price}`);
        description[i] = document.createTextNode(data[i].description);
        item[i]= document.getElementById('item' + i);
        item[i].appendChild(h3[i]);
        h3[i].appendChild(name[i]);
        h3[i].appendChild(br[i]);
        h3[i].appendChild(description[i]);
        h3[i].appendChild(br1[i]);
        h3[i].appendChild(price[i]);
    }
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response) {render(response);
}); // you should get product information in JSON format and render data in the page
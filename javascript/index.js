let select = document.getElementById("region-select");
let options = ['topic1', 'topic2'];

for(var i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
}​
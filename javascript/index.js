function populateSelect(){
    var select = document.getElementById("region-select");
    var options = ['topic1', 'topic2'];

    for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
    }​;
}
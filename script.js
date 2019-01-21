fetch('https://systeme.publishing.one/?format=json')
.then(response => {
    if (!response.ok) {
        alert("An Error occured");
        throw new Error("HTTP error " + response.status);
    }
    return response.json();
})
.then(output => {
    const data = output;
    for(var i = 0; i <= data.length ; i++) {
        var celle1 = data[i]["system"];
        var celle2 = data[i]["pid"];
        var celle3 = data[i]["customer"];
        var celle4 = data[i]["uuid"];
        var celle5 = data[i]["init_date"];
    
        var table = document.getElementById("main-table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = celle1;
        cell2.innerHTML = c2_func();
        cell3.innerHTML = c3_func();
        cell4.innerHTML = '<a target="_blank" href="https://'+data[i]["uuid"]+'.publishing.one">'+c4_func()+'</a>';
        cell5.innerHTML = c5_func();
        


        function c2_func() {
            if("pid" in data[i]) {
                return celle2;
            }else{
                return "";
            }
        }

        function c3_func() {
            if("customer" in data[i]) {
                return celle3;
            }else {
                return "";
            }
        }

        function c4_func() {
            if("uuid" in data[i]) {
                return celle4;
            }else {
                return ""
            }
        }

        function c5_func() {
            if("init_date" in data[i]) {
                return celle5;
            }else{
                return "";
            }
        }

    }
    
}
)
.catch(function(error) {
    console.log(error);
});


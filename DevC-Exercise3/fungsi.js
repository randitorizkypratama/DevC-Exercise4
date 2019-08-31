 function loadTableData() {
        fetch("https://swapi.co/api/planets/")
            .then((resp) => resp.json())
            .then(function (res) {
                insertData(res.results);
            })
            .catch(function (error) {
                console.log("api ga tembus bro");
            });

    }
    function insertData(data) {
        console.log(data);
        var tbody = document.getElementById("isiTabel");

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            var row = tbody.insertRow(index);

            // console.log(element); 
            let kuwo = 0;
            for (var key in element) {
                if (element.hasOwnProperty(key)) {
                    var cell1 = row.insertCell(kuwo); //fibu
                    cell1.innerHTML = element[key]; // skonto

                    // console.log(key);
                    // console.log(element[key]);
                }
                kuwo++;
            }


        }

    }
    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
const SBtn = document.querySelector("#submit");

SBtn.addEventListener("click",async (e) => {
    document.querySelector("#result").innerHTML = "";
    const TargetCountry = document.querySelector("#target").value;
    const LocalHostOptions = ["localhost", "127.0.0.1"];
    let QueryResult = ""
    console.log(window.location.hostname);
    if (LocalHostOptions.includes(window.location.hostname)) {
        QueryResult = await fetch(`http://localhost:8000/api/country/${TargetCountry}`);
    }
    else{
        QueryResult = await fetch(`http://laravel-deploymentproj-borbelydominikpeter.jcloud.jedlik.cloud/api/country/${TargetCountry}`);
    }

    if (!QueryResult.ok) {
        const p = document.createElement("p");
        p.innerHTML = "No Data Found";
        document.querySelector("#result").appendChild(p);
    }
    else{
        const result = await QueryResult.json();
        const table = document.createElement("table");
        const thead = document.createElement("thead");

        let tr = document.createElement("tr");

        thead.appendChild(tr);

        let th1 = document.createElement("th");
        th1.innerHTML = "name";
        tr.appendChild(th1);
        let th2 = document.createElement("th");
        th2.innerHTML = "class";
        tr.appendChild(th2);
        let th3 = document.createElement("th");
        th3.innerHTML = "type";
        tr.appendChild(th3);
        let th4 = document.createElement("th");
        th4.innerHTML = "launched";
        tr.appendChild(th4);
        let th5 = document.createElement("th");
        th5.innerHTML = "main_gun_caliber";
        tr.appendChild(th5);
        


        const tbody = document.createElement("tbody");

        

        result.forEach(Ship => {
            tr = document.createElement("tr");
            tbody.appendChild(tr);
            let td1 = document.createElement("td");
            td1.innerHTML = Ship.name;
            tr.appendChild(td1);
            let td2 = document.createElement("td");
            td2.innerHTML = Ship.class;
            tr.appendChild(td2);
            let td3 = document.createElement("td");
            td3.innerHTML = Ship.type;
            tr.appendChild(td3);
            let td4 = document.createElement("td");
            td4.innerHTML = Ship.launched;
            tr.appendChild(td4);
            let td5 = document.createElement("td");
            td5.innerHTML = Ship.main_gun_caliber;
            tr.appendChild(td5);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        document.querySelector("#result").appendChild(table);
    }
});
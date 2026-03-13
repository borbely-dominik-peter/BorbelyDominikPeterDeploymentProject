import axios from "axios";

// (name, class, type, launched, main_gun_caliber, country)

document.querySelector("#submit").addEventListener(async (e) => {
    const TargetCountry = document.querySelector("#target").innerHTML;
    const QueryResult = await axios.get(`http://localhost:8000/api/country/${TargetCountry}`);

    const table = document.createElement("table");
    const thead = document.createElement("thead");

    let tr = document.createElement("tr");

    thead.appendChild("tr");

    let th = document.createElement("th");
    th.innerHTML = "name";
    tr.appendChild(th);
    th.innerHTML = "class";
    tr.appendChild(th);
    th.innerHTML = "type";
    tr.appendChild(th);
    th.innerHTML = "launched";
    tr.appendChild(th);
    th.innerHTML = "main_gun_caliber";
    tr.appendChild(th);
    th.innerHTML = "country";
    tr.appendChild(th);


    const tbody = document.createElement("tbody");

    tr = document.createElement("tr");
    thead.appendChild("tr");

    QueryResult.data.forEach(Ship => {
        let td = document.createElement("td");
        td.innerHTML = Ship.name;
        tr.appendChild(td);
        td.innerHTML = Ship.class;
        tr.appendChild(td);
        td.innerHTML = Ship.type;
        tr.appendChild(td);
        td.innerHTML = Ship.launched;
        tr.appendChild(td);
        td.innerHTML = Ship.main_gun_caliber;
        tr.appendChild(td);
        td.innerHTML = Ship.country;
        tr.appendChild(td);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    document.querySelector("#result").appendChild(table);
});
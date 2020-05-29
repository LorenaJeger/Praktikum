var eu_db = [
	[1, 30, 20000, "12:13:54", 7, 6, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 6, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 6, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 8, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 8, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 4, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 4, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 10, 2019, 34, 44],
	[1, 30, 20000, "12:13:54", 7, 8, 2019, 34, 44],
	[2, 40, 4000, "19:10:50", 5, 3, 2018, 31, 45]
];

var us_db = [
	[2000, 100, 4, 4, 2019, 41, 45, 10, 45],
	[4200, 103, 3, 4, 2018, 34, 27, 4, 76],
	[4200, 103, 3, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 3, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 2, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 4, 4, 2019, 34, 27, 4, 76],
	[4200, 103, 2, 4, 2019, 34, 27, 4, 76],
];

// * JP Baza *
// year, month, date, time, dur, lat, lng, dur, Q
var jp_db = [
    [2019, 5, 2, "19:10:50", 2, 400, 323, 7, 9],
    [2018, 5, 3, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 3, 5, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 5, 2, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 3, 1, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 3, 1, "19:10:50", 2, 400, 323, 7, 9],
    [2019, 2, 1, "19:10:50", 2, 400, 323, 7, 9]
];

// * SA (south america) Baza *
// Q, H1, H2, dur, time, date, month, year, lat, lng
var sa_db = [
    [12, 32, 34, 65, "19:10:50", 2, 9, 2018, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 2, 3, 2018, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 2, 5, 2018, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 3, 9, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 3, 9, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 5, 8, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 22, 8, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 21, 8, 2019, 3458, 3456 ],
    [12, 32, 34, 65, "19:10:50", 22, 8, 2019, 3458, 3456 ],
];

function findMaxCommets(eu_db, us_db, jp_db, sa_db, year) {
	//zadatak 1 definirati izlazni model
    //zadatak 2 implementirati funkcionalnost
    let formated_dbs = {
        "us": formatUsDb(us_db),
        "eu": formatEuDb(eu_db),
        "jp": formatJpDb(jp_db),
        "sa": formatSaDb(sa_db)
    }

    return analyse_dbs(formated_dbs, year);
}
    
  






//funkcije
function formatEuDb(baza){
    return baza.map((element) =>{
        return {
            date: parseFloat(`${element[4]}.${element[5]}`),
            year: element[6],
            params: element
        }
    })
}
function formatUsDb(baza){
    return baza.map((element) =>{
        return {
            date: parseFloat(`${element[2]}.${element[3]}`),
            year: element[4],
            params: element
        }
    })
}
function formatJpDb(baza){
    return baza.map((element) =>{
        return {
            date: parseFloat(`${element[2]}.${element[1]}`),
            year: element[0],
            params: element
        }
    })
}
function formatSaDb(baza){
    return baza.map((element) =>{
        return {
            date: parseFloat(`${element[5]}.${element[6]}`),
            year: element[7],
            params: element
        }
    })
}



function sort_db(filteredDb){
    return Object.keys(filteredDb).map((element) =>{
        return {date: element, ocurency: filteredDb[element]}
    }).sort((a, b) =>{
        return b.ocurency.length - a.ocurency.length
    }).map((el) =>{
        return el.date
    }).splice(0, 3)
}

function filter_database(databases, filter_Year){
    let temp = databases.filter(({year}) => { return year === filter_Year })
    return temp.reduce(reduce_data, {})
}

function reduce_data(rez, {date, params}){
    (rez[date] = (rez[date] || [])).push(params)
    return rez
}

function get_top_data(databases, year){
    let filter = filter_database(databases, year)
    return sort_db(filter)
}


function analyse_dbs(databases, year){
    function reduce_dbs(result, cur){
        result[cur] = get_top_data(databases[cur], year);
        return result;
    }

    return Object.keys(databases).reduce(reduce_dbs, {})
}

let rez2018= findMaxCommets(eu_db, us_db, jp_db, sa_db, 2018)
console.log("Top tri dana za 2018", rez2018)

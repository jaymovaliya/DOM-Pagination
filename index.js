//import data from 'data.json'
let tableData = JSON.parse(data)
const column = Object.keys(tableData[0]).length
const table = document.getElementById('myTable')
const pagination = document.querySelector('.pagination')

for(let i=0; i<10; ++i){
    var row = table.insertRow(i+1)
    for(let j=0; j<column; ++j){
        var cell = row.insertCell(j)
        cell.innerHTML = `${Object.values(tableData[i])[j]}`
    }
}

for(let i=0; i<tableData.length; i+=10){
    let j = i/10
    j = j+1
    const button = document.createElement('button')
    button.setAttribute("class","btn")
    button.innerHTML = j
    button.onclick = function(){
        removePreviousData()
        addNewData(j-1)
    }
    pagination.appendChild(button)
}

function removePreviousData(){
    for(let i=table.rows.length-1; i>0; i--){
        table.deleteRow(i)
    }
}

function addNewData(index){
    for(let i=index*10; i<(index+1)*10; ++i){
        let rowIndex = i-(index*10)
        var row = table.insertRow(rowIndex+1)
        for(let j=0; j<column; ++j){
            var cell = row.insertCell(j)
            cell.innerHTML = `${Object.values(tableData[i])[j]}`
        }
    }
}





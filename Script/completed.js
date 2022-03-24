var myData1=JSON.parse(localStorage.getItem('completetodo'))||[]

// console.log(myData1)

myData1.map(function(ele){
    // console.log(ele)

    var row1=document.createElement('tr');


    var td11= document.createElement('td');
    td11.innerText=ele.itemName

    var td22= document.createElement('td');
    td22.innerText=ele.itemQunty

    var td33= document.createElement('td');
    td33.innerText=ele.itemPrior


    row1.append(td11,td22,td33)
    document.querySelector('#body').append(row1)

    // myData1.push(ele)
    // localStorage.setItem('myData2',JSON.stringify(myData1))
})
/*itemName: "Md Nasir Uddin"
itemPrior: "high"
itemQunty: "121"
markas: "mark as completed"*/
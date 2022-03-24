
var myData=JSON.parse(localStorage.getItem('todoData'))

var completedata=JSON.parse(localStorage.getItem('completetodo'))||[]


myData.map(function(el,ind){

    var row=document.createElement('tr');


    var td1= document.createElement('td');
    td1.innerText=el.itemName

    var td2= document.createElement('td');
    td2.innerText=el.itemQunty

    var td3= document.createElement('td');
    td3.innerText=el.itemPrior
    
    var td4= document.createElement('td');
    td4.style.color='grey'
    td4.style.cursor='pointer'
    td4.innerText=el.markas
    td4.addEventListener("click", function () {
        markComplete(el,ind);
      });

    row.append(td1,td2,td3,td4)
    document.querySelector('#body').append(row)

})

function markComplete(el,ind){
    // console.log(completedata)
    completedata.push(el)
    localStorage.setItem('completetodo',JSON.stringify(completedata))
}


     





 
    




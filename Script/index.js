
document.querySelector('#form').addEventListener('submit',homeFunc);
var todoList=JSON.parse(localStorage.getItem('todoData'))||[]
function homeFunc(){
    event.preventDefault();
    var myname=document.querySelector('#name').value;
    var qunty=document.querySelector('#qty').value;
    var prior=document.querySelector('#priority').value;
    var markas='completed'

    var obj = {
        itemName:myname,
        itemQunty:qunty,
        itemPrior:prior,
        markas
    };

    todoList.push(obj)
    // console.log(todoList)

    localStorage.setItem('todoData',JSON.stringify(todoList))

}
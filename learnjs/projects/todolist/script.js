function addItem() {
    newTodoText = document.getElementById('newtodo').value;
    list = document.getElementById('listOfTodos');
    let newNode = document.createElement('li');
    newNode.innerHTML = '<input type="checkbox"><label>'+ newTodoText +'</label><button class="del">delete</button>';
    list.prepend(newNode);
    document.getElementById('newtodo').value = '';
    console.log( 'NEW ITEM! ' + newTodoText);
  }
function delItem(){

}
document.addEventListener('click',e => console.log(e.target))

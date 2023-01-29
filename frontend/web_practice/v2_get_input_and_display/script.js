function showInHTML(){
    const user_input = document.getElementById('user_input').value;
    console.log(user_input+ " alpha");
    document.getElementById('display').innerHTML = user_input;    
}
const btn = document.getElementById('btn');
btn.addEventListener('click',showInHTML);
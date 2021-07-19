$(function(){
    let buttonEnter = $('#enter');
    let userInput = $('#userInput');
    let ul = $('ul');
    let localStorage= window.localStorage;
    let todoMap=[
        {
            ind:1,
            text:'example'
        }
    ]
    
    function inputLength() {
        return !!userInput.val();
    }
    
    function createTodo() {
        let li = $("<li>");
        li.append(document.createTextNode(userInput.val()));
        ul.append(li);

        todoMap.push({
            ind:todoMap.length+1,
            text:userInput.val()
        })
        
        localStorage.setItem('Todo_list',JSON.stringify(todoMap));
        userInput.val('');
    
        let deleteButton = $('<button>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
        deleteButton.click(deleteTodoItem);
    
        let colorButton = $('<button>');
        colorButton.append(document.createTextNode('✓'));
        li.append(colorButton);
        colorButton.click(doneTodoItem);
    
        function deleteTodoItem() {
            li.animate({
                'margin-left':'800px',
                'margin-right':'800px',
                'opacity':'0.5',
            },{duration:2000,queue:true});  
        }
    
        function doneTodoItem() { 
            li.toggleClass('done').toggleClass('hide');
        }
    }
    
    function changeListAfterKeyPress(event) {
        if (inputLength() && event.which === 13) {
            createTodo();
        }
    }
    
    function changeListAfterButtonPress() {
        if (inputLength()) {
            createTodo();
        }
    }
    
    buttonEnter.click(changeListAfterButtonPress);
    userInput.keypress(changeListAfterKeyPress);
    })  
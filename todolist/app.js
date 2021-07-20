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
            li.animate(
                {
                    'margin-right': '-=280',
                    'margin-left': '+=280'
                }, {duration:800, queue:false}
            ).fadeOut(1500);
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

    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }

    /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
    setInterval(function () {
        document.getElementById('current_date_time_block').innerHTML = date_time();
    }, 1000);
    })  
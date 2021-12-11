(function(){

    const formEl = document.querySelector('form');
    const inputCoEl = document.querySelector('.input_comment');
    const userEl = document.querySelector('.user_comment');
    
    function CreateComment (con) {
        this.con = con;
        this.init();
    }

    CreateComment.prototype = {
        constructor:CreateComment,
        init: function(){
            const divEl = document.createElement('div');
            divEl.innerHTML = this.con
            userEl.appendChild(divEl);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = inputCoEl.value
        new CreateComment(inputValue)
        alert('댓글 등록이 되었습니다.')
        inputCoEl.value = null;
    }
    formEl.addEventListener('submit', handleSubmit)
    

        // userEl.appendChild(divEl);
        // divEl.innerHTML = inputEl.value

    

})();
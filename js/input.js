(function(){

    const formEl = document.querySelector('form');
    const inputEl = document.querySelector('input');
    const hEl = document.querySelector('h3');

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        // =>특정태그의(form, a태그 등) 기능을 방지함
        // const inputValue = inputEl.value
        // console.log(inputValue)

//--------------------------------------------------------

        hEl.innerHTML = inputEl.value
        hEl.innerHTML = inputValue

//--------------------------------------------------------

    })

})();
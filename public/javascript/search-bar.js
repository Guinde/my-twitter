let menuContainer;

window.addEventListener('click', () => {
    menuContainer.innerHTML = '';
})

window.addEventListener('DOMContentLoaded', () => {
    menuContainer = document.querySelector('#search-menu-container');
    menuContainer.addEventListener("click", (event) => {
        event.stopPropagation()
    });

    let searchInput = document.querySelector("#search-input");
    let refTimeOut;

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;
        if (refTimeOut) {
            clearTimeout(refTimeOut);
        }
        setTimeout(() => {
            axios.get("/user?search=" + value)
                .then(res => {
                    menuContainer.innerHTML = res.data
                })
                .catch((err) => {
                    console.log(err)
                })
        }, 1500);
    })
})
window.addEventListener('DOMContentLoaded', () => {
    const inputProfile = document.querySelector("#input-avatar");
    const formProfile = document.querySelector("#formProfile");

    formProfile.addEventListener("click", () => {
        inputProfile.click();
    });
    inputProfile.addEventListener("change", () => {
        formProfile.submit();
    })
})
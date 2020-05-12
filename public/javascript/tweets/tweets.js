window.addEventListener('DOMContentLoaded', () => {
    bindTweet();
})

function bindTweet () {
    const deleteButton = document.querySelectorAll(".delete-tweet"); 
    const tweetContainer = document.querySelector("#tweet-list-container");
    deleteButton.forEach(el => {
        el.addEventListener("click", ($event) => {
            const tweetId = $event.target.getAttribute('tweetid');
            axios.delete('/tweet/' + tweetId)
                .then(function (response) {
                    tweetContainer.innerHTML = response.data;
                    bindTweet();
                })
                .catch(function(e) {
                    console.log(e);
                })
        });
    })
}
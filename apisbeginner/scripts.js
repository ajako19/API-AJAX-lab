document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    let userInput = document.querySelector("#subredditsubmit").value
    fetch("https://www.reddit.com/r/" + userInput + "/.json")
    .then(response => response.json())
    .then(data => {
    console.log(data)
    let array = data.data.children;

    document.querySelectorAll("div").forEach(function(a){
        a.remove();
    })

    for (let i = 1; i < 10; i++) {
        let eachPost = document.createElement("div");
        let eachTitle = document.createElement("h2");
        let eachImage = document.createElement("img")
        let eachLink = document.createElement("a")
        document.body.append(eachPost)
        eachPost.classList.add("center")
        eachTitle.innerText = array[i].data.title
        eachPost.append(eachTitle)
        eachImage.setAttribute("src", array[i].data.thumbnail)
        eachPost.append(eachImage)
        eachLink.setAttribute("href", array[i].data.url)
        eachLink.innerText = "Click here to see post!"
        eachPost.append(eachLink)
    }
})
})



// fetch("https://www.reddit.com/r/aww/.json")
// .then(response => response.json())
// .then(data => {
//     let posts = data.data.children; // array of posts(26)
//     console.log({posts})

//     posts.map(post => {
//         // console.log(post.data.title)
//         let eachPost = document.createElement("div")
//         eachPost.classList.add("center")
//         eachPost.innerText = post.data.title
//         document.body.append(eachPost);
//         // put images on page
//         let eachImage = document.createElement("img");
//         // console.log(post.data.thumbnail)
//         eachImage.src = post.data.thumbnail;
//         eachPost.append(eachImage)
        
//     })
// }) 

// // .catch(yo => {
// //     console.log("Hello" + yo)
// // })
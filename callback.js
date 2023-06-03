const mygame = [
    {title: "First Game", Game: "PupG"},
    {title: "Second Game", Game: "FreeFire"}
]

function getPost() {
    let output = "";
    mygame.forEach( (game) => {
       output += `<ul><li>${game.title}</li></ul>`;
    })
    document.body.innerHTML = output;
}


// function setPost(game) {
//     setTimeout(() => {
//         mygame.push(game)
//     }, 2000);
// }
// setPost({title: "Third Game", Game: "WWE 2K22"})


// You can see if you commit out seciotn function setPost only first two titles are printed out but, uncommit setPost and still printing only first two this is called Async JavaScript if you only commit setTimpout and get mygame.push out of the settimeout you notice that third game is printed out because setPost is delayed for 2 seconds there for the third game is not printed out because getpost is not delayed and dom is only update at once so, third game never gonna be to printed out here comes the callback function which comes to realy handy in these situations
// ------------------------------------------ //

// getPost(); get rid of this in case of callback function passing in the getPost function as the second paramenter in creatPost so the function work perfect and all three title printed out after two seconds because of the setTimeout 

function creatPost(game, callback) {
    setTimeout(() => {
        mygame.push(game);
        callback(); // Callback this function right after the push
    }, 2000)
}
creatPost({title: "Third Game", Game: "Talking Tom Gold Run"}, getPost)





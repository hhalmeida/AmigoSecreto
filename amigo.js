let friend = [
    {name:'Alciades', friendScret:''},
    {name:'Dna Rose', friendScret:''},
    {name:'Michele', friendScret:''},
    {name:'Leandro', friendScret:''},
    {name:'Hugo', friendScret:''},
    {name:'Eloi', friendScret:''},
    {name:'Quiteria', friendScret:''},
    {name:'Pietra', friendScret:''},
]

// ...
// sort friend secret
// ...
function sortFriends(friend){
    console.log('Starting secret friend')
    let copyFriends = JSON.parse(JSON.stringify(friend));  //clone objects
    let result = [];
    while(friend.length > 0){
        copyFriends = shuffle(copyFriends)

        if(friend[0].name == copyFriends[0].name){
            continue;
        }
        
        let friends = {
            friend : friend.splice(0, 1)[0],
            secret : copyFriends.splice(0, 1)[0],
        }

        console.log('>> ' + friends.friend.name + ', tirou o amigo : ' + friends.secret.name  )

        result.push(friends)
    }
    console.log('Finish secret friend')
    return result;
}

// ...
// randomize objects
// ...
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

var result = sortFriends(friend)

console.log( 'Consolidate resulties')
console.log('--------------------------------------- Table result ---------------------------------------')
console.table(result)
console.log('--------------------------------------------------------------------------------------------')
console.log('--------------------------------------- Info result ----------------------------------------')
console.info(result)
console.log('--------------------------------------------------------------------------------------------')
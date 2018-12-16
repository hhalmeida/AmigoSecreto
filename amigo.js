let friend = [
    {name:'Alciades', friendSecret:''},
    {name:'Dna Rose', friendSecret:''},
    {name:'Michele', friendSecret:''},
    {name:'Leandro', friendSecret:''},
    {name:'Hugo', friendSecret:''},
    {name:'Eloi', friendSecret:''},
    {name:'Quiteria', friendSecret:''},
    {name:'Pietra', friendSecret:''},
    /* {name:'Isabella', friendSecret:''}, */
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
        
        friend[0].friendSecret = copyFriends[0].name
        
        let friends = {
            friend : friend.splice(0, 1)[0],
            secret : copyFriends.splice(0, 1)[0],
        }   

        result.push(friends.friend)
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

console.log( 'Consolidate results')
console.info(result)
console.log('-----------------------------------------------------------------------------------')
var room = ['h1','h2','h3'];
var newRoom = room.map(function (rm){
    if (rm == 'h3') 
    {
        return 'h4'
    }
    else {
        return rm
    }

})
    console.log(room);
    console.log(newRoom);


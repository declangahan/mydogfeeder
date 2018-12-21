var databaseRef = firebase.database().ref();
var dogStatus;

function feedthedog(){
    alert("Button disabled for display purposes.");
    //databaseRef.child("status").set(1);
    
    
}
databaseRef.on("value", function(snapshot){
    dogStatus = snapshot.child("status").node_.value_;
    if(dogStatus == 0){
        alert("A treat has been dispensed to your dog!")
    }    
});

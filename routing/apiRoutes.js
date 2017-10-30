//======================================================================================
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
    app.get("/api/friends",function(request,response){
        response.json(friendsData);
    });

    app.post("/api/friends",function(request,response){
        console.log("a post request is being made");
        console.log(request.body);
        
        var keys = Object.keys(request.body);
        console.log(keys[2]);
        var userdetails = request.body;
        //storing the changed request values in to an array and mapping it to number
        // var results = (userdetails["scores[]"].map(Number));
        //initialize an array c to store the values from subtracting two elements
       // var c = [];
        //looping through the scores of each score and subtract the two values 
        //var d;var x = []
        var suitableFriends = findFriends(userdetails);
        // var out =(suitableFriends);
        console.log(suitableFriends);
            response.json(suitableFriends);
        // response.json("i am a strimg");
       });

       function findFriends(userdetails){
        var suitableFriends = [];
        var prevFriendScore = 0;
      
        friendsData.forEach(function(friend){
          var currentFriendScore = findSuitableFriends(friend, userdetails);
      
          if(currentFriendScore === prevFriendScore){
            suitableFriends.push(friend);
          }
          else if(currentFriendScore < prevFriendScore){
            suitableFriends = [];
            suitableFriends.push(friend);
          }
      
          prevFriendScore = currentFriendScore;
        });
      
        return suitableFriends;
      }


       function findSuitableFriends(friend1,friend2){
           return friend1.scores.reduce(function(total,score,currentIndex){
               var friend1Score = parseInt(score);
               var friend2score = (friend2.scores.map(Number));
               //console.log(friend2score[currentIndex]);
                var friend2Score = friend2score[currentIndex]; 
               
               //console.log("this is" +friend2Score);
               var difference = Math.abs(friend1Score-friend2Score);
               //console.log(difference);
                total = total+difference;
                console.log(total);
               return total
           },0);
       }
        // friendsData[0].scores.forEach(function(element,index,c){
        //     c[index] = Math.abs(element- results[index])
            
            // add all elements of c and store the sum in some other variable
            // d = c.reduce(function(a,b){
            //     return a+b; //reducing the values  to a single number and storing it in a variable
            //     });
            // x.push(d);//push the reduced value in to an array
            
        // })
        // console.log(c);
        // console.log(x);
        // console.log(typeof(x));
        // for( var i < 0; i< x.length; i++){
        //     if(x[i]===0){
        //         response.json(friendsData[i]);
        //         friendsData.push(incomingReqValue);
        //     }else{
        //         response.json("no result found");
        //         friendsData.push(incomingReqValue);
        //     }
        // }
        
    // })
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = [];
        console.log(friendsData);
    });
    
}


function receivesAFunction (callBack){
    callBack();
    
    }
    
    function message(){
    return("Callback function")
    }
    
    receivesAFunction(message);
    
    
    
    function returnsANamedFunction(){
    
    function callBack2(){
    console.log("2nd Callback")
    }
    return callBack2
    
    }


    
    function returnsAnAnonymousFunction() {
        
        return function(callBack3) {
          return(callBack3)
        };
      }
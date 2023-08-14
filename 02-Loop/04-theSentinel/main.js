
let key  ;
let value  ;

let user = {} ;

function list () {
    do{
        key = prompt('Key : ' );
        value = prompt('value : ');
        
        if(key == null ||  key.trim() == "" || key == "stop" || value == null || value.trim() == "" ||  value == "stop"){
            break;
        }else{
            user[key] = value;
            
    }
        

    
    } while(!(key == null ||  key.trim() == "" || key == "stop" && value == null || value.trim() == "" ||  value == "stop"))
    }
    
    list();
    console.log(user)


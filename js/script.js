
function showNumbers() {

    
    var scores = [8,1,5,6,4,5,0,2,5,7,5,4,2,7,8,5,7,3,5,6,7,4,0,2,1,1,0,4,2,3,1,2,0,7,3,3,1];
    var items="";
    
    for (var i = 0; i <= 36; i++) 
    {
        var number = i;
        var amount = scores[i];
        
        
        switch (number) {
            case 0:
                classname = "green";
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
            case 12:
            case 14:
            case 16:
            case 18:
            case 19:
            case 21:
            case 23:
            case 25:
            case 27:
            case 30:
            case 32:
            case 34:
            case 36:
                classname = "red";
                break;
            default:
                classname = "black";
                break;
            
        }
        number = number.toString();
        amount= amount.toString();
        

        items += "<div class='number " + classname + "'><h2>" + number + "</h2><p>" + amount + " X</p></div>";
      
      
    }    

    document.getElementById("numberContainer").innerHTML = items;
    
}
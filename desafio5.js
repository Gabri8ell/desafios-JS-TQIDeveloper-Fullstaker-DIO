let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
    
let totalMatches = 0;
    while(n>1){
        if(n%2 == 0){
            numberOfMatches = n / 2 // partidas na atual rodada
            totalMatches = totalMatches + numberOfMatches// total partidas
            n = n / 2 // qtd times
            
            
        }else{
          numberOfMatches = (n - 1) / 2
          totalMatches = totalMatches + numberOfMatches
          n = (n + 1) / 2
        }
    }
    
print(totalMatches)
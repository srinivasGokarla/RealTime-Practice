 function modFact(a,b){
        if (a >= b) {
            return 0;
        }
           
        let result = 1;
        for (let i = 1; i <= a; i++){
            result = (result * i) % b;
        }
        return result;
    }

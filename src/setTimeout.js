for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log("var values",i), 1);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log("fix it values", i), 1);
}


for(var i=1;i<=3;i++){
    function y(i){
                                                 setTimeout(function(){
                                             console.log("closures", i);
                                      }, i*1000); 
                                          }
                                          y(i);
                                      }

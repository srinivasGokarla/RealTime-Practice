let N = 4

function NumberOfWays(N) {
    if(N == 0 || N == 1)
    return 1
   else if(N == 2)
    return 2
    else {
        return (NumberOfWays(N-1) + NumberOfWays(N-2) + NumberOfWays(N-3))
    }
}

console.log(NumberOfWays(N))

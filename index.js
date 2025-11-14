document.getElementById('binomial-expansion').addEventListener('click',binomialExpansion)

function binomialExpansion(){
    function factorial(a){
        let ans = 1
        for(let i = 0; i < a; i++){
            ans = (a-i)*ans
        }
        return ans
    }

    function nChooser(n,r){
        let nfact = factorial(n)
        let rfact = factorial(r)
        let nMinusr = n-r
        let nMinusrFact = factorial(nMinusr)
        let ans = nfact/(rfact*nMinusrFact)
        return ans
    }

    function binomial(a,b,n){
        let r = 0
        let tempn = n
        let bn = 0
        let ans
        for(let i = 0; i < (n+1) ; i++){
            ans = nChooser(n,r)*(a**tempn)*(b**bn)
            r++
            tempn--
            bn++
            console.log(ans)
        }
        return ans
    }
    console.log(factorial(5))
    console.log(nChooser(10,2))
    console.log(binomial(3,(-1/3),5))
}

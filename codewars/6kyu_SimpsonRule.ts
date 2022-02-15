//Simpson's Rule - Approximate Integration
//f(x)=3/2*sin(x)^3


    function simpson (n:number) {
        const A:number=0;
        const B:number=Math.PI;
        let H:number = (B-A)/n;
        function f(x:number):number{
            return (3/2)*(Math.pow(Math.sin(x),3))
        }

        function subSum1(n:number, a:number, h:number):number{
            let cont:number=0;
            for(let i=1;i<=n/2;i++){
                cont+=f(a+(2*i-1)*h);
            }
            return cont;
        }
        function subSum2(n:number, a:number, h:number):number{
            let cont:number=0;
            for(let i=1;i<=n/2-1;i++){
                cont+=f(a+2*i*h);
            }
            return cont;
        }

        return ((B-A)/(3*n))*(f(A)+f(B)+4*subSum1(n,A,H)+2*subSum2(n,A,H))
    }  

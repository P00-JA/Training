let printStar=(n)=>{
    if(n%2==0){
    n=n+1;
    }
    for(let i=1;i<=Math.floor(n/2)+1;i++){
        let pttrn='';
        const numofSpace=(Math.floor(n/2)-i)+1;
        const numofStar=n-2*numofSpace;
        for(let j=1;j<=numofSpace;j++){
           pttrn+=" ";
        }
        for(let s=1;s<=numofStar;s++){
            pttrn+='*';
        }
        console.log(pttrn);

    }
    let c=Math.floor(n/2)-1;
    for(let i=Math.floor(n/2)+2;i<=n;i++){
        let pttrn='';
        const numofSpace=(Math.floor(n/2)-c);
        const numofStar=n-2*numofSpace;
        for(let j=1;j<=numofSpace;j++){
           pttrn+=" ";
        }
        for(let s=1;s<=numofStar;s++){
            pttrn+='*';
        }
        console.log(pttrn);
        c--;

    }

    }
    printStar(5);
    
    
//DrunkMoon: 195 chars Javascript
c=[];t=`${require('fs').readFileSync('t')}`.split`,`.map(x=>+x);for(i=0;i<=Math.max(...t);i++)c.push(t.map(x=>{d=Math.abs(x-i);return d*(d+1)/2}).reduce((p,c)=>p+c,0));console.log(Math.min(...c))


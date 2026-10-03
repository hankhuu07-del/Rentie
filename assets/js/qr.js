/* QR version 1, error correction L, byte mode, mask 0. Payloads are short ASCII Rentie IDs. */
(function(root){
function matrix(text){
 const bytes=Array.from(new TextEncoder().encode(text));if(bytes.length>17)throw Error('Mã QR tối đa 17 byte.');
 const bits=[];const push=(v,n)=>{for(let i=n-1;i>=0;i--)bits.push((v>>>i)&1)};
 push(4,4);push(bytes.length,8);bytes.forEach(b=>push(b,8));for(let i=0;i<4&&bits.length<152;i++)bits.push(0);while(bits.length%8)bits.push(0);
 const data=[];for(let i=0;i<bits.length;i+=8)data.push(bits.slice(i,i+8).reduce((a,b)=>(a<<1)|b,0));let pad=0;while(data.length<19)data.push(pad++%2?0x11:0xec);
 function mul(x,y){let z=0;for(let i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11d);z^=((y>>>i)&1)*x;}return z;}
 let gen=[1];for(let i=0,r=1;i<7;i++,r=mul(r,2)){const next=Array(gen.length+1).fill(0);gen.forEach((c,j)=>{next[j]^=c;next[j+1]^=mul(c,r)});gen=next;}
 const rem=Array(7).fill(0);for(const b of data){const f=b^rem.shift();rem.push(0);for(let j=0;j<7;j++)rem[j]^=mul(gen[j+1],f);}const all=data.concat(rem);const size=21,m=Array.from({length:size},()=>Array(size).fill(false)),fn=m.map(r=>r.slice());
 const set=(x,y,v)=>{if(x>=0&&x<size&&y>=0&&y<size){m[y][x]=!!v;fn[y][x]=true}};
 for(let i=0;i<size;i++){set(6,i,i%2===0);set(i,6,i%2===0)}
 for(const [cx,cy] of [[3,3],[17,3],[3,17]])for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){let d=Math.max(Math.abs(dx),Math.abs(dy));set(cx+dx,cy+dy,d!==2&&d!==4)}
 const fmt=0x77c4,bit=i=>(fmt>>>i)&1;
 for(let i=0;i<=5;i++)set(8,i,bit(i));set(8,7,bit(6));set(8,8,bit(7));set(7,8,bit(8));for(let i=9;i<15;i++)set(14-i,8,bit(i));for(let i=0;i<8;i++)set(size-1-i,8,bit(i));for(let i=8;i<15;i++)set(8,size-15+i,bit(i));set(8,size-8,true);
 let n=0;for(let right=size-1;right>=1;right-=2){if(right===6)right=5;for(let vert=0;vert<size;vert++){const y=((right+1)&2)===0?size-1-vert:vert;for(let j=0;j<2;j++){const x=right-j;if(!fn[y][x]){const raw=n<all.length*8?((all[n>>>3]>>>(7-(n&7)))&1):0;m[y][x]=!!(raw^((x+y)%2===0));n++;}}}}
 return m;
}
function svg(text){const m=matrix(text);let path='';m.forEach((r,y)=>r.forEach((v,x)=>{if(v)path+=`M${x+4},${y+4}h1v1h-1z`}));return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" role="img" aria-label="Mã QR ${text.replace(/[^A-Z0-9]/g,'')}" shape-rendering="crispEdges"><rect width="29" height="29" fill="white"/><path d="${path}" fill="black"/></svg>`;}
root.RentieQR={matrix,svg};if(typeof module!=='undefined'&&module.exports)module.exports={matrix,svg};
})(typeof window!=='undefined'?window:globalThis);

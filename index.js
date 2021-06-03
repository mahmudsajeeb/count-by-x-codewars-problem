function count (x,n){
  const z = []
  for(let i= x; z.length<n; x+=n){
    z.push(i)
  }
  return z
}

console.log(count(1,3,4,5))
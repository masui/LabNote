function shuffle(a){
  for(var i = a.length-1; i>0; i--){
    var r = Math.floor(Math.random() * (i+1));
    var tmp = a[i]; a[i] = a[r]; a[r] = tmp;
  }
  return a
}

a = new Array(13)
for(var i=0;i<13;i++){ a[i] = i+1 }
//console.log(shuffle(a))

[a[1],a[2]] = [a[2], a[1]]
//console.log(a)

a.map ((v) => console.log(v))


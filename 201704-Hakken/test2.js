function* player(){
  var i = 0
  while(true){
    yield i++
  }
}

p = player()

function calc(){
  te = p.next().value
  console.log(te)
  setTimeout(calc,20)
}

calc()




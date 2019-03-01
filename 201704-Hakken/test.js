function* player1(){
  var i = 0
  while(true){
    yield i++
  }
}

function* player2(){
  var i = 0
  while(true){
    yield i++ * 2
  }
}

p1 = player1()
p2 = player2()

function calc(){
  te1 = p1.next().value
  te2 = p2.next().value
  console.log(`${te1} ${te2}`)
  setTimeout(calc,20)
}

calc()

//while(true){
//  calc()
//}



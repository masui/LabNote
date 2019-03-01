//var cards1, cards2

function* player1(cards){
  var cards1 = cards
  var v, result
  //cards = yield // 最初の手をもらう
  //console.log("cards = ")
  //console.log(cards)
  while(true){
    console.log('before player yield ----')
    v = cards1.shift()
    result = yield v
    console.log(`first yield end 1 var=${v}`)
    // result = yield
    yield
    console.log('result =')
    console.log(result)
    if(result){
      for(var i=0; i<result.length; i++){
        cards1.push(result[i])
      }
    }
    console.log(cards.join('-'))
  }
}

function* player2(cards){
  var cards2 = cards
  var v, result
  //cards = yield // 最初の手をもらう
  //console.log("cards = ")
  //console.log(cards)
  while(true){
    console.log('before player yield ----')
    v = cards2.shift()
    result = yield v
    console.log(`first yield end 2 var=${v}`)
    yield
    console.log('result =')
    console.log(result)
    if(result){
      for(var i=0; i<result.length; i++){
        cards2.push(result[i])
      }
    }
    console.log(cards.join('='))
  }
}

cards = []
for(var i=1;i<=13;i++){
  cards.push(i)
  cards.push(i)
}
p1 = player1(cards)

cards = []
for(var i=1;i<=13;i++){
  cards.push(i)
  cards.push(i)
}
p2 = player2(cards)

function func(){
  var te1 = p1.next().value // プレーヤの手を取得
  var te2 = p2.next().value
  console.log(`te1=${te1} te2=${te2}`)
  // ここで勝負


  p1.next([te1, te2])
  p2.next([])
  setInterval(func,1000)
}
func()



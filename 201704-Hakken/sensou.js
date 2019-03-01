function shuffle(a){
  for(var i = a.length-1; i>0; i--){
    var r = Math.floor(Math.random() * (i+1));
    [a[i],a[r]] = [a[r], a[i]]
  }
  return a
}

function* player(cards,n){
  while(true){
    if(cards.length == 0) process.exit(0)
    var result = yield cards.shift()
    yield
    if(result)
      for(var i=0; i<result.length; i++){
        cards.push(result[i])
      }
    console.log(cards.join(n == 1 ? '-' : '='))
  }
}

// 1〜13のカードを用意
cards = new Array(13)
for(var i=0;i<13;i++) cards[i] = i+1
p1 = player(shuffle(cards),1)
p2 = player(shuffle(cards.concat()),2)

ba = [] // 場の札
function func(){
  var te1 = p1.next().value // プレーヤの手を取得
  var te2 = p2.next().value
  //console.log(`te1=${te1} te2=${te2}`)
  ba.push(te1); ba.push(te2)
  shuffle(ba)
  v = te1 == te2 ? 0 :
      te1 == 1 && te2 == 2 ? 2 :
      te1 == 2 && te2 == 1 ? 1 :
      te1 > te2 ? 1 : 2
  switch(v){
    case 0: p1.next([]); p2.next([]); break;
    case 1: p1.next(ba); p2.next([]); ba = []; break;
    case 2: p1.next([]); p2.next(ba); ba = []; break;
  }

  setInterval(func,100)
}
func()



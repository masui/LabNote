var cards1, cards2, ba = []
function* player(cards,n){ // プレーヤプロセス
  while(true){
    var result = yield cards.shift() // 手を出す
    yield                            // 結果を待つ
    result.forEach((v) => cards.push(v))
  }
}

function setup(){
  cards1 = new Array(13) // 1〜13のカードを用意
  for(var i=0;i<13;i++) cards1[i] = i+1
  cards2 = cards1.concat()
  p1 = player(shuffle(cards1,true),1)
  p2 = player(shuffle(cards2,true),2)
  createCanvas(400,400)
}

function draw(){
  if(cards1.length == 0 || cards2.length == 0) return
  var te1 = p1.next().value       // プレーヤの手を取得
  var te2 = p2.next().value
  ba.push(te1); ba.push(te2)
  shuffle(ba,true)
  v = te1 == te2 ? 0 :            // 勝敗判定
      te1 == 1 && te2 == 2 ? 2 :
      te1 == 2 && te2 == 1 ? 1 :
      te1 > te2 ? 1 : 2
  switch(v){
    case 0: p1.next([]); p2.next([]); break;
    case 1: p1.next(ba); p2.next([]); ba = []; break;
    case 2: p1.next([]); p2.next(ba); ba = []; break;
  }
  clear()
  text('player1: '+cards1.join(' '),10,10)
  text('player2: '+cards2.join(' '),10,30)
}
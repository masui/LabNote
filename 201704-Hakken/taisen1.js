function* player1(){
  while(true){
    // 場を見て次の手を考える
    gcp = ['G', 'C', 'P']
    yield gcp[random(3)] // 手を出す
  }
}

function* player2(){
  while(true){
    // 場を見て考える
    gcp = ['G', 'C', 'P']
    yield gcp[random(3)] // 手を出す
  }
}
 
function random(n){
  return Math.floor(Math.random() * n)
}

ba = {}
p1 = player1()
p2 = player2()
win = 0
lose = 0
draw = 0
function taisen(){
  te1 = p1.next().value
  te2 = p2.next().value
  if(te1 == 'G'){
    if(te2 == 'G') draw++
    if(te2 == 'C') win++
    if(te2 == 'P') lose++
  }
  if(te1 == 'C'){
    if(te2 == 'G') lose++
    if(te2 == 'C') draw++
    if(te2 == 'P') win++
  }
  if(te1 == 'P'){
    if(te2 == 'G') win++
    if(te2 == 'C') lose++
    if(te2 == 'P') draw++
  }
  console.log(`win=${win} lose=${lose} draw=${draw}`)
}
while(true){
  taisen()
}




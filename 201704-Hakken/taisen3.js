 function* player1(){
   while(true){
     // 場を見て次の手を考える
     gcp = [G, C, P] = [0, 1, 2]
     yield gcp[Math.floor(Math.random() * 3)] // 手を出す
     kekka = yield // 判定結果待ち
   }
 }

 function* player2(){
   while(true){
     // 場を見て次の手を考える
     gcp = [G, C, P] = [0, 1, 2]
     yield gcp[Math.floor(Math.random() * 3)] // 手を出す
     yield // 結果待ち
   }
 }
 

 function taisen(){
   te1 = p1.next().value
   te2 = p2.next().value
   ba.push([te1, te2])
   result = (te1 - te2 + 3) % 3
   result == 0 ? even++ : result == 1 ? win++ : lose++
   p1.next()
   p2.next()
   ba.kekka = `win=${win}, lose=${lose}, draw=${even}`
 }

 ba = []
 p1 = player1(), p2 = player2()
 win = 0, lose = 0, even = 0
 
 function draw(){
   taisen()
   console.log(ba.kekka)
 }

 while(true){
   draw()
 }
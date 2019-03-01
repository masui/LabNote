function* player1(){
　while(true){
　　場を見て次の手を考える()
　　yield 次の手
　}
}

function* player2(){
　while(true){
　　場を見て次の手を考える()
　　yield 次の手
　}
}

p1 = player1(); p2 = player2()
while(true){
　te1 = p1.next().value
　te2 = p2.next().value
　console.log(te1とte2の勝負(te1,te2))
}


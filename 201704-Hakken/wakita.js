
function* player(n) {
　while (true) {
　　yield n;
　}
}

var i = 0;
p1 = player(1); p2 = player(2)
while (true) {
　console.log('勝負 ' + (i++) + ': ' + p1.next().value + ', ' + p2.next().value)
}
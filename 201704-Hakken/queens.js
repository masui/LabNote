q = [0,1,2,3,4,5,6,7]

function collisions(q){
  diff = {}
  var total = 0
  for(var i=0;i<8;i++){
    //console.log(`==== try ${i} and ${q[i]}`)
    var d = i - q[i]
    if(! diff[d]){
      diff[d] = 1
    }
    else {
      total++
    }
  }
  diff = {}
  for(var i=0;i<8;i++){
    //console.log(`==== try ${i} and ${q[i]}`)
    var d = i + q[i]
    if(! diff[d]){
      diff[d] = 1
    }
    else {
      total++
    }
  }
  return total
}

coll = collisions(q)
//console.log(q.join('-'))

function generate(){
  col1 = Math.floor(Math.random() * 8)
  do {
    col2 = Math.floor(Math.random() * 8)
  } while(col1 == col2)
  qq = []
  for(i=0;i<8;i++){
    qq[i] = q[i]
  }
  tmp = qq[col1]
  qq[col1] = qq[col2]
  qq[col2] = tmp
  if(collisions(qq) < coll){
    coll = collisions(qq)
    q = qq
    //console.log(coll)
    //console.log(q.join('-'))
    if(coll == 0){
      for(i=0;i<8;i++){
        a = ['. ','. ','. ','. ','. ','. ','. ','. ']
        a[q[i]] = '* '
	console.log(a.join(''))
      }
    }
  }
  setInterval(generate,100)
}

generate()


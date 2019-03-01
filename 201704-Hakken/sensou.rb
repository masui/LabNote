# coding: utf-8
# カード準備
cards = []
(1..13).each { |i|
  (1..4).each {
    cards << i
  }
}
cards.shuffle!
cardsx = cards[0..25]
cardsy = cards[26..51]

cardsx = []
cardsy = []
(1..13).each { |i|
  (1..2).each {
    cardsx << i
    cardsy << i
  }
}
cardsx.shuffle!
cardsy.shuffle!

# 勝負開始
ba = [] # 引き分けのときに出したままになるカード
while true do
  x = cardsx.shift # 先頭の1枚を出す
  y = cardsy.shift
  puts "#{x} vs #{y}"
  if x == y        # 引き分けなら場に出す
    ba += [x, y]
  else
    if x == 1 && y != 2
      xwin = true
    elsif y == 1 && x != 2
      xwin = false
    else
      xwin = (x > y)
    end
    if xwin
      cardsx += (ba + [x, y]).shuffle
    else
      cardsy += (ba + [x, y]).shuffle
    end
    ba = []
  end
  puts '*' * cardsx.length
  break if cardsx.length == 0 || cardsy.length == 0
end


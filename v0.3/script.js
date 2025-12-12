
//console.log(document.documentElement.scrollTop)
let scroll = document.getElementsByClassName('maincolor')
let header = []
for (var i = 0; i < scroll.length; i++) {
    console.log(scroll.length)
    header[i] = document.getElementByClassNames('maincolor')[i]
    
}
//console.log(scroll)
window.onscroll = function() {
    console.log(document.body.getBoundingClientRect().y,document.getElementById('1').getBoundingClientRect().y)
}

let d1 = document.getElementById('title1')
let d2 = document.getElementById('title2')
let d3 = document.getElementById('title3')
let d4 = document.getElementById('title4')
let d5 = document.getElementById('title6')

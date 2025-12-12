document.body.onscroll = function() {getPosition(document.documentElement.scrollTop)}

let d1 = document.getElementById('title1')
let d2 = document.getElementById('title2')
let d3 = document.getElementById('title3')
let d4 = document.getElementById('title4')
let d5 = document.getElementById('title6')



let getPosition = (p) => {
	if(Math.trunc(p).toString().slice(0,-1).length = 0){
	pk = p
}
else if(Math.trunc(p).toString().length > 0){
	pk = Math.trunc(p).toString().slice(0,-1)
}
console.log(pk,Math.trunc(pk),p,d5,d4)
	
    //console.log(Math.trunc(p),Math.trunc(p).toString().slice(0,-1),Math.trunc(p).toString().slice(0,-1).length)
    d1.style.setProperty('rotate', Math.trunc(pk)+"deg")
    d2.style.setProperty('rotate', -Math.trunc(pk)+"deg")
    d3.style.setProperty('rotate', -Math.trunc(pk)+"deg")
    d4.style.setProperty('rotate', Math.trunc(pk)+"deg")
    d5.style.setProperty('width', (Math.trunc(pk)/2)+50+"%")

    //d.style.setProperty('width', (pk--)+"px")
}
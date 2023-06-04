function dark() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
let scrolls = document.getElementsByClassName("sticky")
let div = document.getElementsByClassName("con")
let rightmenu = document.querySelectorAll("h2")
let rightmenulist = document.querySelectorAll("dd")
let rightmenuhead = document.querySelectorAll("dt")
let content = []
let content2 = []
let list = []
let listchild = []
for (var i = 0; i < scrolls.length; i++) {
    content.push(scrolls[i])
    content2.push(div[i])
}
for (var i = 0; i < rightmenu.length; i++) {
    list.push(rightmenu[i])
    listchild.push(rightmenulist[i])
}
let con = []
window.addEventListener("load", () => {
    let scroll = document.getElementsByClassName("sticky")
    let menu = document.getElementsByClassName("menu")[0]
    let menuright = document.getElementsByClassName("menuright")[0]
    let header = []
    let pos = []
    for (var i = 0; i < scroll.length; i++) {
        header.push(scroll[i])
    }
    //console.log(header[0].offsetHeight,header[0].offsetWidth)
    window.onscroll = function() {

  function myFunction(x) {
  if (x.matches) { // If media query matches
  } else {
   for (var i = 0; i < content2.length; i++) {
            if (content2[i].getBoundingClientRect().top < 0) {
                if (content2[i].getBoundingClientRect().top + content2[i].getBoundingClientRect().height > 0) {
                    content[i].style.position = 'fixed'
                    content[i].style.width = 'calc( 12% - 10px )'
                    content[i].style.height = 'auto'
                    content[i].style.top = '0px'
                    content[i].style.padding = '10px 0px'
                    content[i].style.fontWeight = 'bold'
                    rightmenuhead[i].style.display = 'list-item'
                    rightmenuhead[i].style.listStyle = 'disc'
                    rightmenuhead[i].style.fontWeight = 'bold'
                } else {
                    content[i].style.removeProperty("position")
                    content[i].style.removeProperty("width")
                    content[i].style.removeProperty("height")
                    content[i].style.removeProperty("top")
                    content[i].style.removeProperty("padding")
                    content[i].style.fontWeight = 'normal'
                    rightmenuhead[i].style.removeProperty("display")
                    rightmenuhead[i].style.fontWeight = 'normal'
                    //console.log(false)
                }
            } else {
                //console.log(false)
                content[i].style.removeProperty("position")
                content[i].style.removeProperty("width")
                content[i].style.removeProperty("height")
                content[i].style.removeProperty("top")
                content[i].style.removeProperty("padding")
                content[i].style.fontWeight = 'normal'
                rightmenuhead[i].style.removeProperty("display")
                 rightmenuhead[i].style.fontWeight = 'normal'
            }
            //console.log(scrolls[i].getBoundingClientRect())
        }
  }
}

var x = window.matchMedia("(orientation: portrait)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


        
        if (header[0].getBoundingClientRect().y > 0) {
            menu.style.display = 'none'
            menuright.style.display = 'none'
        } else {
            menu.style.display = 'flex'
            menuright.style.display = 'flex'
        }
        if (content2[6].getBoundingClientRect().y < -1300) {
            menuright.style.display = 'none'
        }
 //console.log( rightmenu)
        for (var i = 0; i < rightmenu.length; i++) {

            if (rightmenu[i].getBoundingClientRect().top < 0) {
                
                if (rightmenu[i].getBoundingClientRect().top < 0 ,rightmenu[i+1].getBoundingClientRect().top > 0) {
                    listchild[i].style.color = 'rgba(240, 81, 62, 1.0)'
                    listchild[i].style.display = 'list-item'
                    listchild[i].style.listStyle = 'disc'
                    listchild[i].style.backgroundColor = 'rgba(240, 81, 62, 0.07)'
                    listchild[i].style.padding = '0px 3px'
                    listchild[i].style.borderRadius = '3px'
                    listchild[i].style.width = 'fit-content'

                } else {
                    listchild[i].style.removeProperty("color")
                    listchild[i].style.removeProperty("display")
                    listchild[i].style.backgroundColor = 'inherit'
                    listchild[i].style.padding = '0px 0px'
                    listchild[i].style.borderRadius = '0px'
                    listchild[i].style.width = 'fit-content'
                      
                }
            } else {
                    listchild[i].style.removeProperty("color")
                    listchild[i].style.removeProperty("display")
                    listchild[i].style.backgroundColor = 'inherit'
                    listchild[i].style.padding = '0px 0px'
                    listchild[i].style.borderRadius = '0px'
                    listchild[i].style.width = 'fit-content'
                    
            }
        }
        
    }
})
//console.log(scrolls[0].offsetHeight,scrolls[0].offsetWidth)
let showmenu = () => {
    let k = 0
    for (var i = 0; i < scrolls.length; i++) {
        if (content[i].style.position !== '') {
            content[i].style.removeProperty("position")
            content[i].style.removeProperty("width")
            content[i].style.removeProperty("height")
            content[i].style.removeProperty("top")
            content[i].style.removeProperty("padding")
            content[i].style.position = 'fixed'
            content[i].style.width = 'calc( 12% - 10px )'
            content[i].style.height = 'auto'
            content[i].style.top = k + 'px'
            content[i].style.padding = '10px 0px'
            k += scrolls[i].offsetHeight
        } else {
            //console.log(content[i])
            content[i].style.position = 'fixed'
            content[i].style.width = 'calc( 12% - 10px )'
            content[i].style.height = 'auto'
            content[i].style.top = k + 'px'
            content[i].style.padding = '10px 0px'
            k += scrolls[i].offsetHeight
        }
    }
}
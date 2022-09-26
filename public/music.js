var number = true
var music1 = document.querySelector(".play1")
var music2 = document.querySelector(".play2")
var music3 = document.querySelector(".play3")
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")

img2.onclick = function() {
    if(this.number == false) {
        this.hisnumber = true
        this.music.pause()
    } else {
        this.number = false
        this.music.play()
    }
}
music1.onclick = function(){
    if(number == false){
        number = true
        music1.pause()
            
    } else {
        number=false
        music1.play()
	}
}
music2.onclick = function(){
    if(number == false){
        number = true
        music2.pause()
            
    } else {
        number=false
        music2.play()
	}
}
music3.onclick = function(){
    if(number == false){
        number = true
        music3.pause()
            
    } else {
        number=false
        music3.play()
	}
}
//用 e 代替元素选择器
let e = function(selector) {
    return document.querySelectorAll(selector)
}

//获取到全部的播放按钮
let number = true
let playSong = e('.action-play')
let songAll = e('.play-song')

//切换歌曲时暂停其他歌曲
let songPause = () => {
    for (let i = 0; i < songAll.length; i++) {
        const element = songAll[i];
        element.pause()
    }
}
let playAll = () => {
    for (let i = 0; i < playSong.length; i++) {
        const music = playSong[i]
        const musicFa = music.parentNode
        const musicBa = musicFa.previousSibling
        const musicSa = musicBa.previousElementSibling
        const musicLa = musicSa.lastChild
        const musicDa = musicLa.previousSibling
        const musicHa = musicDa.lastChild
        const musicPlay = musicHa.previousSibling
        //给遍历出的每个播放按钮绑定事件
        music.addEventListener('click', () => {
            if (number === false) {
                number = true
                musicPlay.pause()
            } else {
                songPause()
                number = false
                musicPlay.play()
            }
            console.log('按钮点击了');
        }) 
    }
}
playAll()
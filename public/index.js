//用 e 代替元素选择器
let e = function (selector) {
    return document.querySelectorAll(selector)
}
let x = function (selector) {
    return document.querySelector(selector)
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
//遍历出每个播放按钮并找到他的父元素的兄弟元素的子元素
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
        //获取到每首歌的歌名
        const musicGa = musicHa.parentElement
        const musicChild = musicGa.children[0]
        //获取到当前歌名
        const todo = musicChild.innerText
        //获取到需要替换内容的元素
        const songContainer = x('.play')
        //给遍历出的每个播放按钮绑定事件
        music.addEventListener('click', () => {
            if (number === false) {
                number = true
                let wangYun = x('.wangyun')
                let play = x('.play')
                //点击按钮时关闭主页面
                wangYun.style.display = 'none'
                //给播放页添加 flex 布局
                play.style.display = 'flex'
                //暂停当前歌曲
                musicPlay.pause()
            } else {
                //切歌曲关闭所有其他正在播放的歌曲
                songPause()
                number = false
                //播放当前歌曲
                musicPlay.play()
                let t = templateTodo(todo)
                // 这个方法用来添加元素, afterbegin是插入元素内部的第一个子节点之前。
                songContainer.insertAdjacentHTML('afterbegin', t);
            }
            console.log('按钮点击了');
        })
    }
}
playAll()

// 点击按钮返回主页面
// let playGo = x('.play-top-icon')
// playGo.addEventListener('click', () => {
//     console.log('点击返回');
// })

let templateTodo = function (name) {
    let t = `
    <div class="play-top">
        <i class="play-top-icon">  </i>
        <span>正在播放:&nbsp;${name}</span>
    </div>
    `
    return t
}

console.log('函数外', b);
var b = 10;
var b = 20
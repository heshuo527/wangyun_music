//用 e 代替元素选择器
let e = function (selector) {
    return document.querySelectorAll(selector)
}
let x = function (selector) {
    return document.querySelector(selector)
}

//获取到全部的播放按钮
let playSong = e('.action-play')
let songAll = e('.play-song')
let items = x('.container')
number = true
//切换歌曲时暂停其他歌曲
let songPause = () => {
    //全局  array  全部的歌曲
    for (let i = 0; i < songAll.length; i++) {
        let element = songAll[i];
        element.pause()
    }
}

//实现切换歌曲
let switchover = (count) => {
    //
    array = []
    for (let i = 0; i < songAll.length; i++) {
        let element = songAll[i];
        array.push(element)
    }
    let sun = count - 1
    array[sun].play()
    number = true
}

//获取到当前的每一首歌
let search = (document) => {
    const musicFa = document.parentNode
    const musicBa = musicFa.previousSibling
    const musicSa = musicBa.previousElementSibling
    const musicLa = musicSa.lastChild
    const musicDa = musicLa.previousSibling
    const musicHa = musicDa.lastChild
    const musicPlay = musicHa.previousSibling
    return musicPlay
}

// 通过 event.target 的 class 来检查点击的是什么
items.addEventListener('click', function (event) {
    let target = event.target
    if (target.classList.contains('action-play')) {
        play = search(target)
        console.log(play);
        //获取到主页面元素
        let wangYun = x('.wangyun')
        //获取到播放页的元素
        let playSong = x('.play')
        //点击按钮时关闭主页面
        wangYun.style.display = 'none'
        //给播放页添加 flex 布局
        playSong.style.display = 'flex'
        /* //暂停当前歌曲
        musicPlay.pause() */
        //获取当前歌曲的歌名
        const musicFa = target.parentNode
        const musicBa = musicFa.previousSibling
        const musicSa = musicBa.previousElementSibling

        index = musicSa.children[0].innerText

        const musicLa = musicSa.lastChild
        const musicDa = musicLa.previousSibling
        const musicChild = musicDa.children[0]
        const todo = musicChild.innerText
        songPause()
        play.play()
        number = true
        //获取到需要替换内容的元素
        const songContainer = x('.play')
        // 把获取到的歌名传入页面
        let t = templateTodo(todo)
        // 这个方法用来添加元素, afterbegin是插入元素内部的第一个子节点之前。
        songContainer.insertAdjacentHTML('afterbegin', t)
        newPlay()

    } else if (target.classList.contains('play-shang')) {
        index--
        if (index <= 0) {
            index = 6
            songPause()
            switchover(index)
        } else {
            songPause()
            switchover(index)
        }

    } else if (target.classList.contains('play-ting')) {
        ting()

    } else if (target.classList.contains('play-xia')) {
        index++
        if (index > 6) {
            index = 1
            songPause()
            switchover(index)
        } else {
            songPause()
            switchover(index)
        }
    }
})

let bottomItem = x('.play-bottom')
bottomItem.addEventListener('click', (event) => {
    let target = event.target
    if (target.classList.contains('new-shang')) {
        console.log('上一曲');
        index--
        if (index <= 0) {
            index = 6
            songPause()
            switchover(index)
        } else {
            songPause()
            switchover(index)
        }
    } else if (target.classList.contains('new-ting')) {
        console.log('暂停');
        ting()
    } else if (target.classList.contains('new-xia')) {

        index++
        if (index > 6) {
            index = 1
            songPause()
            switchover(index)
        } else {
            songPause()
            switchover(index)
        }
    }
})

function ting() {
    if (number == true) {
        songPause()
        number = false
    } else {
        window.play.play()
        number = true
        console.log('this.play', this.play);
    }
}

let newPlay = () => {
    // 点击按钮返回主页面
    let playGo = x('.play-top-icon')
    let playName = x('.play-top')
    //获取到主页面元素
    let wangYun = x('.wangyun')
    //获取到父页面的元素
    let play = x('.play')
    playGo.addEventListener('click', () => {
        console.log('点击返回');
        wangYun.style.display = 'block'
        playName.style.display = 'none'
        play.style.display = 'none'
    })
}

//获取到当前歌曲名字替换到头部位置
var templateTodo = function (name) {
    let t = `
    <div class="play-top">
        <i class="play-top-icon">  </i>
        <span>正在播放:&nbsp;${name}</span>
    </div>
    `
    return t
}
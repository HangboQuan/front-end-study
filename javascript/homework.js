var btn = document.getElementById('btn');

// 获取body元素
var body = document.body;

// 获取html元素
var html = document.documentElement;

var flag = 0;
btn.onclick = function () {
    if (flag === 0) {
        body.className = 'black-background';
        flag = 1;
    } else {
        body.className = 'default-background';
        flag = 0;
    }
}

var jd_nav = document.getElementsByClassName('jd');
// var sub_nav = jd_nav[0].getElementsByTagName('li');
var sub_nav = jd_nav[0].getElementsByClassName('producter')

console.log(sub_nav)


sub_nav[0].onmouseover = function () {
    this.style.backgroundColor = '#fff';
}


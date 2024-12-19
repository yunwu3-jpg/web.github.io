// 在这个示例中，JavaScript 主要用于添加一些交互效果
// 你可以根据需要添加更多的功能，比如平滑滚动、动画等

// 示例：平滑滚动到页面顶部
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

// 当点击按钮时，平滑滚动到页面顶部
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// 注意：上面的平滑滚动到页面顶部的代码需要你在HTML中添加一个按钮
// 例如：<button onclick="topFunction()" id="backToTop" style="display:none;position:fixed;bottom:20px;right:30px;z-index:1000;">返回顶部</button>
// 但在这个示例中，我们并没有添加这个按钮，因为页面内容较少，不需要滚动。

// 你可以根据需要添加其他JavaScript代码来实现更多的交互效果。

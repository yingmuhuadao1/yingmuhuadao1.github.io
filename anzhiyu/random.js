var posts=["2023/11/29/hexo博客搭建/","2023/11/30/typora基本语法/","2023/11/30/用kali制作钓鱼页面/","2023/11/30/远控实验/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
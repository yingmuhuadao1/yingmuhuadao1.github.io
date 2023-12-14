var posts=["2023/11/29/hexo博客搭建/","2023/12/01/linux基本命令与目录结构/","2023/12/04/python/","2023/11/30/typora基本语法/","2023/12/11/vue的简单使用/","2023/12/10/前端知识/","2023/11/30/用kali制作钓鱼页面/","2023/12/01/纸飞机与社工库/","2023/12/04/计算机网络基础/","2023/11/30/远控实验/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
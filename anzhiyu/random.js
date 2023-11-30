var posts=["2023/11/29/hexo博客搭建/","2023/11/30/test1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
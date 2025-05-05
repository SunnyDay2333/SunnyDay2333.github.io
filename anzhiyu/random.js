var posts=["2025/05/05/归并排序/","2025/04/04/编译原理ex1-词法分析器/","2025/05/05/快速排序/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
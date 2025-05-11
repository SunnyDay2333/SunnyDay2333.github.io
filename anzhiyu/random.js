var posts=["2025/05/05/二分法-数的范围AcWing789/","2025/05/08/个人简历/","2025/05/05/归并排序/","2025/05/07/高精度四则运算/","2025/05/09/张量/","2025/05/05/快速排序/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
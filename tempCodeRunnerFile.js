 let post2 =  new Post('a', 'b', 'c');
   
  console.log(post2);

  function Post(title, body, author) {
   this.title = title;
   this.body = body;
   this.author = author;
   this.views = 0;
   this.comments = [];
   this.isLiove = false;
  }
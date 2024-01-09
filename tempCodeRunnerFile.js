const books = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
 ];

 const book = books.find(book => {
  return book.name === 'a';
 });

 console.log(book);

module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },authorselect:function(authors,author_id){
    var tag ='';
    var i=0;
    while(i<authors.length){
      var selected = '';
      if(authors[i].id === author_id){
        console.log('authors[i].id='+authors[i].id);
        console.log('author_id='+author_id);
        selected ='selected';
      }
      tag = tag + `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`//=tag+ 는 +=로가능
      console.log(i+'authors='+authors);
     
      i++;
    }
    return `
    <select name="author">
    ${tag}
  </select>`

  }
}

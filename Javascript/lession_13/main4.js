var postAPI = 'http://localhost:3000/posts'

fetch(postAPI)
    .then((Response) => { return Response.json(); })
    .then((data) => { console.log(data); })
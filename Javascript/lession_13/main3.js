// Front-end : xây dựng giao diện người dùng
// back-end : xây dựng logic xử lí + cơ sở dữ liệu

// API (url): application programing interface : cổng giao diện

// backend -> api -> fetch -> JSON/XML -> JSON.parse -> javascipt types -> render ra giao diện HTML 

var postApi = 'https://jsonplaceholder.typicode.com/posts';

// method fetch -> return promise responce da reslove() và return 1 Respone Object
// -> responce has method JSON -> return promise data da dc resolve

fetch(postApi)// 
    .then(Response => Response.json()) // json.parse : JSON -> javascript type
    .then(json => {
        var htmls = json.map((post) => {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
                </li>`
        }
        )
        htmls = htmls.join('')
        document.getElementById('post-block').innerHTML = htmls;
        // console.log(json)
    }

    )
    .catch((err) => { console.log('error!') })
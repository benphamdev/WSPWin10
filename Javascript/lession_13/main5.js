// fetch
// api server (fake) / mock api
// CRUD
// - create : tạo mới -> POST
// - read : lấy dữ liệu -> GET
// - update : chỉnh sửa -> PUT / PATCH
// - delete : xóa -> DELETE
// postman


var listCourseBlock = document.getElementById('list-courses'),
    courseApi = 'http://localhost:3000/course';

function getCourse(callback) {
    fetch(courseApi)
        .then((Response) => { return Response.json() })
        .then(callback)
}

function createCourse(data, callback) {
    var option = {
        method: 'POST',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(data),
    }
    fetch(courseApi, option)
        .then((Response) => { Response.json(); })
        .then(callback);
}


function updateCourse(id, data, callback) {
    var option = {
        method: 'PATCH',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(data),
    }
    fetch(courseApi + '/' + id, option)
        .then((Response) => { Response.json(); })
        .then(callback);
}

function handleDeleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(),
    }
    fetch(courseApi + '/' + id, option)
        .then((Response) => { Response.json(); })
        .then(() => {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) { courseItem.remove(); }
        });
}

function handleUpdateCourse(id) {
    var name = document.querySelector(".h4-" + id),
        description = document.querySelector('.p-' + id),
        btn = document.querySelector('#create'),
        nameInput = document.querySelector('input[name="name"]'),
        descriptionInput = document.querySelector('input[name="description"]');

    if (name && description) {
        nameInput.value = name.innerText;
        descriptionInput.value = description.innerText;
        btn.innerText = "update";
    }

    btn.onclick = () => {
        var formdata = {
            name: nameInput.value,
            description: descriptionInput.value
        }
        updateCourse(id, formdata, getCourse(renderCourse));
        btn.innerText = "submit";
        nameInput = descriptionInput = "";
    }
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function () {
        var Name = document.querySelector('input[name="name"]').value,
            Description = document.querySelector('input[name="description"]').value;
        // console.log(Description);
        var data = {
            name: Name,
            description: Description
        }
        createCourse(data, () => {
            getCourse(renderCourse);
        });
    }
}

function renderCourse(course) {
    var html = course.map((tmp) => {
        return `<li class="course-item-${tmp.id}">
            <h4 class="h4-${tmp.id}">${tmp.name}</h4>
            <p class="p-${tmp.id}">${tmp.description}</p>
            <button onclick="handleDeleteCourse(${tmp.id})">delete</button>
            <button onclick="handleUpdateCourse(${tmp.id})">update</button>
        </li>`
    })
    listCourseBlock.innerHTML = html.join('')
}

function start() {
    getCourse(renderCourse);
    handleCreateForm();
}

start();
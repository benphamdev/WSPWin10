// 1. Event Listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. local Storage
// 6. session  Storage
// 7. Coding convention
// 8. Best practice
// 9. Mistakes
// 10. Performane


// 1. xử lí nhiều việc khi 1 event xảy 
// 2. lắng nghe / hủy bỏ lắng nghe

var btn = document.getElementById('btn');

function task() {
    console.log(Math.random());
}

btn.addEventListener('click', task);

setTimeout(function () {
    btn.removeEventListener('click', task);
}, 3000);


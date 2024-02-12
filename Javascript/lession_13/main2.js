var Users = [
    {
        id: 1,
        name: 'pham chien'
    },
    {
        id: 2,
        name: 'thuy nga'
    },
    {
        id: 3,
        name: 'van tich'
    },
    {
        id: 4,
        name: 'xuan loc'
    }
];

var Comments = [
    {
        id: 1,
        user_id: 3,
        content: 'anh son chua ra video'
    },
    {
        id: 2,
        user_id: 4,
        content: 'vua ra xong em oi !'
    },
    {
        id: 3,
        user_id: 3,
        content: 'cam on anh !'
    }
]

// 1 lấy comments
// 2 từ Comments lấy ra Users_id
// 3 từ user_id lấy ra user tương ứng


// Fake API

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Comments);// return mảng comments đã khai báo ở backend
        }, 1000);
    });
}

function getUserByIds(userIds) {
    return new Promise((resolve) => {
        var res = Users.filter((tmp) => {
            return userIds.includes(tmp.id);
        });
        setTimeout(() => {
            return resolve(res);
        }, 1000);
    })
}

getComments()
    .then((dataComments) => {
        var ListID = dataComments.map((n) => { return n.user_id; })
        return getUserByIds(ListID)
            .then((ans) => {
                return {
                    us: ans,
                    cm: dataComments
                };
            })
    })
    .then((dataUser) => {
        var commentBlock = document.getElementById('comment-block');
        var html = "";
        dataUser.cm.forEach((comment) => {
            var userName = dataUser.us.find((n) => {
                return n.id === comment.user_id;
            });
            html += `<li>${userName.name} : ${comment.content}</li>`;
        })
        commentBlock.innerHTML = html;
        // console.log(dataUser)
    })


// promise hell 
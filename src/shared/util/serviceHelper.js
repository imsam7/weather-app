export const serviceHelper = { get, post }

// var host = "https://api.github.com/users/";
var host = "";

function get(serviceUrl, requestData) {
    return fetch(host + serviceUrl, {
        headers: {
            // 'Authorization': 'Bearer' + localStorage.getItem('token')
            'Content-Type': "application/json"
        }
    }).then(res => {
        if (res.status === 200) {
            return res.json()
        }
        else {
            if (res.status === 400) {

            }
            else if (res.status === 404 || res.message === 'Not Found') {
                window.location.href = '/';
            }
            else if (res.status === 500) {

            }
        }
    })
}

function post(serviceUrl, requestData) {
    return fetch(host + serviceUrl, {
        headers: {
            // 'Authorization': 'Bearer' + localStorage.getItem('token')
            'Content-Type': "application/json"
        },
        body: JSON.stringify(requestData)
    }).then(res => {
        if (res.status === 200) {
            return res.json()
        }
        else {
            if (res.status === 400 || res.message === 'Not Found') {

            }
            else if (res.status === 500) {

            }
        }
    })
}
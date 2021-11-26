// var http = require("http");
// http.createServer(function (req, res) {
//     res.write("Hello");
//     res.writeHead(200, {
//         "Content-Type": "text/html",
//         'Date': 'Tue, 15 Nov 1994 08:12:31 GMT',
//         'Access-Control-Expose-Headers': '*'
//     })
//     // Date là 1 trường của header. Server phải cho phép client truy cập vào nó bằng header Access-Control-Expose-Headers
//     //thì mới đc. 1 số trường ta phải làm như v.
//     res.end();
// }).listen(4000);
// //http server bị hạn chế vì nó chỉ cho gửi lại text html nên nếu ta muốn gửi 1 object thì éo đc. Kiểu gửi lại để client
// //là browser load chạy thôi, k dùng để test các kiểu gửi object hay j đc

const express = require('express');
const app = express();

const deadline = new Date("2021/12/31 00:00:00");

app.get('/', function (req, res) {
    res.send({
        remainingTime: (deadline - new Date())/1000
    });
});

app.listen(4000, function () {
    console.log('Server is running..');
}); //chú ý phải trùng cái port mà client dùng proxy

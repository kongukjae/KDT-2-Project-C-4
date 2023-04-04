import http from 'http'
import fs from 'fs'
import qs from 'querystring'




const server = http.createServer(function (request, response) {



  if (request.method === 'GET' && request.url === '/') {

    fs.readFile('./show.html', function (error, data) {

      if (error) {
        response.writeHead(404);
        console.error("에러!");
      }

      else {
        response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });


        response.end(data);

        let buf = Buffer.from(data);
        console.log(buf);


        // let parseData = JSON.parse(buf);
        // console.log(parseData);

      }
    })

  }


  let body = "";
  if (request.method === 'POST' && request.url === '/location') {


    request.on('data', function (data) {

      body += data;

    });
    request.on('end', function () {
      console.log(body)
    })

  }


})

server.listen(3000, function (error) {

  if (error) {
    console.log("서버 구동 실패");
  }
  else {
    console.log("서버 구동");
  }
});


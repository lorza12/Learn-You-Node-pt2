const { func } = require("joi");
const net = require("node:net");

const port = process.argv[2];

const server = net.createServer(function listener(socket) {
  const date = new Date();
  function zeroCheck(datedata) {
    if (datedata < 10) {
      return `0${datedata}`;
    } else {
      return datedata;
    }
  }

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  year = zeroCheck(year);
  month = zeroCheck(month);
  day = zeroCheck(day);
  const dateStr = `${year}-${month}-${day} ${hour}:${minutes}\n`;
  socket.end(dateStr);
});
server.listen(port);
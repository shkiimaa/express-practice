const express = require('express');
const app = express();

//app.use는 요청이 들어오면 콜백을 실행

//Express가 자동으로 HTTP요청 정보를 파싱해 JS객체를 만들고 콜백의 첫번 째 인수로 전달한다.
// app.use((req: any, res: any) => {
//   console.log('WE GOT A NEW REQUEST');
//   res.send({ color: 'red' });
// });

app.get('/', (req: any, res: any) => {
  res.send('This is the home page');
});

app.get('/cats', (req: any, res: any) => {
  res.send('cat request');
});

app.get('/dogss', (req: any, res: any) => {
  res.send('dog request');
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});

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

// 콜론으로 경로 매개변수를 설정 할 수 있다.
// req.params에 들어온다.
app.get('/r/:subreddit/:postId', (req: any, res: any) => {
  const { subreddit, postId } = req.params;
  res.send(`SUBREDDIT : ${subreddit} POST ID : ${postId}`);
});

//req.query로 query parameter 값을 가져올 수 있다.
//익스프레스가 알아서 객체로 파싱해서 가져옴.
app.get('/search', (req: any, res: any) => {
  const { q } = req.query;
  if (!q) {
    res.send(`nothing`);
  } else {
    res.send(`${q}`);
  }
});

/* 제네릭 응답(라우트와 일치 하지 않을 때 응답한다.)
제네릭 응답은 항상 밑에 있어야한다
(* 는 전부를 뜻하며 첫번째에 있으면 아래에 있는 코드를 무시하고 제네릭만 실행됨) */
app.get('*', (req: any, res: any) => {
  res.send("I don't know that path!");
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});

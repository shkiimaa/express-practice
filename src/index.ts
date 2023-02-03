const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// ejs 사용하기
// view engine의 디폴트 값을 ejs로 변경
app.set('view engine', 'ejs');

//외부 디렉토리에서 살행시 veiws 에러를 해결하기 위한 세팅
app.set('views', path.join(__dirname, '../views'));

//res.render에 경로를 따로 안적는 이유는 이미 default값이 views 디렉토리 이기 때문이다.
//res.render는 랜더링된 결과물을 전달한다.
app.get('/', (req: any, res: any) => {
  res.render('home');
});

app.get('/rand', (req: any, res: any) => {
  const random = Math.floor(Math.random() * 10) + 1;
  res.render('random', { rand: random });
});

app.get('/r/:subreddit', (req: any, res: any) => {
  const { subreddit } = req.params;
  console.log(subreddit);
  res.render('subreddit', { title: subreddit });
});

app.get('/loop', (req: any, res: any) => {
  const cats: string[] = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
  res.render('loop', { cats });
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

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});

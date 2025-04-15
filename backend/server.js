const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 8000;
// const userRouter = require("./routes/user");


// app.use(mylogger);

app.use(express .static("public"));
 //publicフォルダの中を静的なファイルとして認識させる（）HTMLを認識
// app.set("view engine", "ejs"); 
//DB読み込みもできる.ejsはexpressで用意されているテンプレートエンジンである。DBで用意したデータをテンプレートエンジンの中に読み込ませてHTMLで表示する

app.get("/", (req, res)=>{
    // console.log("Hello express");
    // res.send("<h1>こんにちは<h1/>");
    // res.sendStatus(404);
    // res.status(500).send("エラーです");
    // res.status(500).json({msg: "エラーです"});
    // res.render("index", {text: "NodejsとExpress" });

    res.sendFile("/index.html");
    //_dilmaneは今現在のディレクトリ(server.jsが存在する階層)を指す
    //その中にindex.htmlが存在するのでこの書き方になる

});

io.on("connection", (socket) => { 
    //onは受け取るという意味
    console.log("ユーザーが接続しました");

    // socket.on("chat message", (msg)=>{
    //     console.log(msg);
    // })
});


//ルーティング
// app.use("/user", userRouter);


app.listen(PORT, ()=>{
    console.log("server running!");
});

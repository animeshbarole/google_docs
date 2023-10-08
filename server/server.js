

const io =require('socket.io')(3001,{
    cors:{
        origin:"http://localhost:3000",
        methods:['GET','POST']
    }
});

io.on('connection',(socket)=>{
     console.log(socket+"Connected");

     socket.on('disconnect',()=>{
        console.log("Client Disconneted");
     })
})
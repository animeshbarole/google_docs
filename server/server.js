
const mongoose  =require('mongoose');

const Document  =require('./document');

const defaultValue = "";

mongoose.connect("mongodb://localhost:27017/GoogleDocument",{
    useNewUrlParser: true, 
    useUnifiedTopology:true,
     

});
var connection   = mongoose.connection;
 

const io =require('socket.io')(3001,{
    cors:{
        origin:"http://localhost:3000",
        methods:['GET','POST']
    }
});

io.on('connection',(socket)=>{
     console.log(socket+"Connected");


    socket.on('get-document',async documentID =>{
              
          const document  =await findOrCreateDocument(documentID);
          socket.join(documentID);
          socek.emit('load-document',document.data)
    });
      

     socket.on('disconnect',()=>{
        console.log("Client Disconneted");
     })


});

async function findOrCreateDocument(id)
{
      if(id==null) return ;

      const document = await Document.findByID(id);
      if(document) return document;

      return await Document.create({
         _id: id,
         data :defaultValue,
      })
}
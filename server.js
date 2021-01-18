//Install express server
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/prueba-tecnica'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/prueba-tecnica/index.html'));
});

app.listen(process.env.PORT || 8080);
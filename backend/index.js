const express=require('express')
const session=require('express-session')

const bodyParser=require('body-parser')
const path=require('path')
const getCasino = require('./models/dao_casino')
const { createPlayer, getPlayer,getPlayer2,PlayerUpdate, deletePlayer, getPlayerbyName } = require('./models/dao_player')

const app=express()
const PORT=3001


app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(session({
    secret:"123456",
    resave:false,
    saveUninitialized:false
}))

app.get('/',async (req,res)=>{
    const Playerlist=await getPlayer()
    res.render('tragamonedas',{
        players:Playerlist
    })
})

app.get('/add',async (req,res)=>{
    const Casinolist=await getCasino();
    
    res.render('crearJugador',{
        
        casinos:Casinolist
    })
})

app.post('/add',async (req,res)=>{ 
    const pyname2=req.body.jg_names;
    const pyorig=await getPlayerbyName(pyname2);
    const py={
        names:req.body.jg_names,
        acumprofit:parseInt(req.body.jg_gain),
        bets:parseInt(req.body.jg_bets),
        promprofit:parseInt(req.body.jg_gain/req.body.jg_bets),
        idCasino:parseInt(req.body.jg_casino)
    }
    // if(pyorig.names==py.names){
    //     res.send(`<h4>ERROR: NOMBRE YA EXISTENTE</h4>`)
    // }else{
        
        const pysaved=await createPlayer(py);
        console.log(pysaved)
        res.redirect('/');
    // }
  
})

app.get('/edit/:id',async (req,res)=>{
    const pyid=req.params.id;
    const py=await getPlayer2(pyid)
    const casinolist=await getCasino()
    res.render('editarJugador',{
        players:py,
        casino:casinolist
    })
})

app.post('/edit/',async (req,res)=>{
    const pyorigid=parseInt(req.body.py_id);
    const pyorig=await getPlayer2(pyorigid);
    const py={
        id:parseInt(req.body.py_id),
        names:req.body.py_name,
        acumprofit:parseInt(req.body.py_gain),
        bets:parseInt(req.body.py_bets),
        promprofit:parseInt(req.body.py_gain/req.body.py_bets),
        idCasino:parseInt(req.body.py_casino),
    }
    console.log(py)
    if(pyorig.names==py.names){
        res.send(`<h4>ERROR: NOMBRE YA EXISTENTE</h4>`)
       
    } else {
        await PlayerUpdate(py)
        res.redirect('/')
    }
    
})

app.get('/delete/:id',(req,res)=>{
    const idpy=req.params.id;
    deletePlayer(parseInt(idpy))
    res.redirect('/');
})

app.listen(PORT,()=>{
    console.log(`SERVIDOR EJECUTANDO EN EL PUERTO ${PORT}`)
})
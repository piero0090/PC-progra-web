const db=require('../sequelize/models')

const getPlayer=async()=>{
    const py=await db.Player.findAll();
    const playerss=[];
    for(let pe of py){
        playerss.push({
            id:pe.id,
            names:pe.names,
            acumprofit:pe.acumprofit,
            bets:pe.bets,
            promprofit:pe.promprofit,
            casino:await pe.getCasino()
        })
    }
    console.log(playerss);
    return playerss;
}

const createPlayer=async(py)=>{
    return await db.Player.create(py)
}

const getPlayer2=async(pyid)=>{
    const py=await db.Player.findOne({
        where:{
            id:pyid
        }
    })
    return py
}

const getPlayerbyName=async(pyname)=>{
    const py=await db.Player.findOne({
        where:{
            names:pyname
        }
    })
    return py
}

const PlayerUpdate=async(py)=>{
    const pyedit=await getPlayer2(py.id)
    pyedit.names=py.names,
    pyedit.acumprofit=py.acumprofit,
    pyedit.bets=py.bets,
    pyedit.promprofit=py.promprofit,
    pyedit.idCasino=py.idCasino
    await pyedit.save()

    return true
}

const deletePlayer=async(idpy)=>{
    await db.Player.destroy({
        where:{
            id:idpy
        }
    })
    return true;
}

const Playerfilter=async(pyname)=>{
    const pyfilter=db.Player.findAll({
        where:{
            names:pyname
        }
    })
    const playerse=[]
    for(let py of pyfilter){
        playerse.push({
            id:py.id,
            names:py.names,
            acumprofit:py.acumprofit,
            bets:py.bets,
            promprofit:py.promprofit,
            casino:await py.getCasino()
        })
    }
    return playerse
}

module.exports={
    getPlayer:getPlayer,
    createPlayer:createPlayer,
    getPlayer2:getPlayer2,
    PlayerUpdate:PlayerUpdate,
    deletePlayer:deletePlayer,
    Playerfilter:Playerfilter,
    getPlayerbyName:getPlayerbyName
}
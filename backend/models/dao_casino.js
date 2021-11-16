const db=require('../sequelize/models')

const getCasino=async()=>{
    const CasinoList=await db.Casino.findAll();
    return CasinoList;
}

module.exports=getCasino;
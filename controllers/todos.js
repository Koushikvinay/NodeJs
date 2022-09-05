
const getAlltodos = (req,res)=>{
res.send('Get all Task')
}
const gettodos = (req,res)=>{
    res.json({id:req.params.id})
}   
const createtodos = (req,res)=>{
    res.json(req.body)
}

const updatetodos = (req,res)=>{
     res.send(' Update  Task')
}

const deletetodos = (req,res)=>{
   res.send('Delete Task')
 }
            

module.exports= {
    getAlltodos,
    gettodos,
    createtodos,
    updatetodos,
    deletetodos
}
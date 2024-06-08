const { handleMessage } = require('./telegram')
exports.handler = async(req,method) => {
    // console.log('REQUEST',req)
    const body = req
    if(body) {
        await handleMessage(body.message)
    }
    return;
    
}
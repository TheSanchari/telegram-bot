const connection  = require('./connection')
const quotesGenerator = require('./quotesGenerator')
exports.sendMessage = (messageObject,messageText)=> {
    console.log("inside this send Message")
    return connection.axiosInstance.get('sendMessage',{
        chat_id:messageObject?.chat?.id,
        text:messageText
    })
}
exports.handleMessage = async(messageObject) => {
    // console.log('messageObject',messageObject)
    const messageText = messageObject.text || ""
    if(messageText.charAt(0) === '/'){
        const command = messageText.substr(1)
        console.log('command',command)
        switch (command) {
            case "start":
                return this.sendMessage(messageObject,"Hi! This bot has been created by Sanchari!")
                break;
            case "quote":
                const msg  = await quotesGenerator()
                return this.sendMessage(messageObject,msg)
                return 
            default:
                return this.sendMessage(messageObject,"Hi! I dont know this command")
                break;
        }
    }
}

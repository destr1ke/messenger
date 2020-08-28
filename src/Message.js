import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core"
import './Message.css'
function Message({message,username}) {
   const isUser = username === message.username;
   console.log(isUser && 'message__user')
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser? "message__userCard": "message__guestCard"}>
                <CardContent>
                    <Typography
                    color='white'
                    component='h2'
                    variant='h5'>
                        {message.username}:{message.message}
                    </Typography>
                </CardContent>
            </Card>  
        </div> 
    )
}

export default Message;
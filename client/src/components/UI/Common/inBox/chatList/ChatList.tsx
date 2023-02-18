import { Avatar, Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useContext, useState } from 'react'
import { ChatBoxOpen } from '../../../../../services/Reducers/UserReducer'
import { UserContext } from '../../../../../context/userContext'
import { get_chat_users, get_conversation } from '../../../../../services/Api/user/userApi'

function ChatList({ conversation}:any) {
    const chatOpen = useSelector((state: any) => state.user.value.isChatOpen)
    const dispatch = useDispatch()
    const [users, setUser] = useState<any>(null)
    const { user } = useContext(UserContext)

    useEffect(() => {
        console.log(user, 'user from conversation')
        GetChatUsers()
    }, [user])




    // GET CHAT USERS //

    const GetChatUsers = async () => {
        const friendId = conversation?.members?.find((m:any) => m !== user?.id)
        console.log(friendId,'friendId')
        const getChatUserResponse = await get_chat_users(friendId)
        console.log(getChatUserResponse,'getChatUserResponse')
        setUser(getChatUserResponse)
    }


    // HANDLING CHAT OPEN //

    const handleOpenChat = () => {
        console.log(chatOpen, 'chatOpen')
        dispatch(ChatBoxOpen(true))
    }


    return (
        <div>
            {/* <Box sx={{ width: '100%', height: '67vh' }} > */}
               
                    <Box >
                        <Box display='flex' alignItems='center' sx={{ width: '100%', height: '13vh', boxShadow: 3 }}>
                            <Box sx={{ ml: 5, mr: 5 }}>
                                <Stack display='flex' direction='row' alignItems='center' spacing={3} >
                                    <Box>
                                        {users && users.Images ?
                                        <Avatar sx={{ width: 56, height: 56 }} src={`/images/${users.Images}`} />
                                    :<Avatar sx={{ width: 56, height: 56 }} src=''/>
                                    }
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: '#FFFFFF' }}>{users && users.username} </Typography>
                                        <Typography sx={{ color: '#FFFFFF', opacity: .3 }}>latest message on this chat  </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
            {/* </Box> */}
        </div>
    )
}

export default ChatList
import { Avatar, Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useContext, useState } from 'react'
import { ChatBoxOpen, ErrorModalOpen } from '../../../../../services/Reducers/UserReducer'
import { UserContext } from '../../../../../context/userContext'
import { get_chat_users, get_messages } from '../../../../../services/Api/user/userApi'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import postsImages from '../../../../../services/Api/user/imageApi'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function ChatList({ socket, conversation, user2, onlineUsers }: any) {
    const chatOpen = useSelector((state: any) => state.user.value.isChatOpen)
    const dispatch = useDispatch()
    const [setUser] = useState<any>(null)
    const { user } = useContext(UserContext)
    console.log(onlineUsers, 'onlineUsers from inbox')

    useEffect(() => {
        GetChatUsers()
        GetMessages()
    }, [user])

    // ONLINE USERS //

    //    useEffect(() => {

    //    }, [])



    // GET CHAT USERS //

    const GetChatUsers = async () => {
        try {
            const friendId = conversation?.members?.find((m: any) => m !== user?.id)
            const getChatUserResponse = await get_chat_users(friendId)
            setUser(getChatUserResponse)
        } catch (error) {

        }
    }

    // FETCHING RECENT MESSAGE //

    const GetMessages = async () => {
        try {
            await get_messages(conversation?._id)
        } catch (error) {

        }
    }



    return (
        <div>
            {/* <Box sx={{ width: '100%', height: '67vh' }} > */}

            <Box >
                <Box display='flex' alignItems='center' sx={{ width: '100%', height: '13vh', boxShadow: 3 }}>

                    <Box sx={{ ml: 5, mr: 5 }}>
                        <Stack display='flex' direction='row' alignItems='center' spacing={3} >
                            {/* {onlineUsers && onlineUsers.map((item: any, index: number) => ( */}
                            <Box>
                                {onlineUsers.includes(conversation?.username,1) === 'true' ?
                                    <Box>
                                        {conversation?.Images ?
                                            <StyledBadge
                                                overlap="circular"
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                variant="dot"
                                            >
                                                <Avatar sx={{ width: 56, height: 56 }} src={`/images/${conversation?.Images}`} />
                                            </StyledBadge>
                                            :
                                            <StyledBadge
                                                overlap="circular"
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                variant="dot"
                                            >
                                                <Avatar sx={{ width: 56, height: 56 }} src='' />
                                            </StyledBadge>
                                        }
                                    </Box> :
                                    <Box>
                                        {conversation?.Images ?
                                            <Avatar sx={{ width: 56, height: 56 }} src={`${postsImages}/${conversation?.Images}`} />
                                            : <Avatar sx={{ width: 56, height: 56 }} src='' />
                                        }
                                    </Box>
                                }
                            </Box>
                            {/* ))} */}
                            <Box>
                                <Typography sx={{ color: '#FFFFFF' }}>{conversation?.username} </Typography>
                                <Typography sx={{ color: '#FFFFFF', opacity: .3 }}>{conversation?.latestMessage
                                }  </Typography>
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
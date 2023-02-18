import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useDispatch, useSelector } from 'react-redux';
import { ChatBoxOpen } from '../../../../../services/Reducers/UserReducer';
import { Textarea } from '@mui/joy';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useEffect, useContext, useState } from 'react'
import { get_chat_users, get_messages } from '../../../../../services/Api/user/userApi';
import { UserContext } from '../../../../../context/userContext';

function ChatField() {
    const currentDataChat = useSelector((state: any) => state.userData.value.currentChatData)
    const dispatch = useDispatch()
    const { user } = useContext(UserContext)
    const [users, setUser] = useState<any>(null)
    const [messages,setMessages] = useState<any>()
    console.log(currentDataChat, 'currentDataChat')

    useEffect(() => {
        GetChatUsers()
        GetMessages()
    }, [])

    // FETCHING MESSAGES //

    const GetMessages = async () => {
        const getMessageResponse = await get_messages(currentDataChat?._id)
        console.log(getMessageResponse, 'getMessageResponse')
        setMessages(getMessageResponse)

    }

    // GET CURRENT  CHAT USERS //

    const GetChatUsers = async () => {
        const friendId = currentDataChat?.members?.find((m: any) => m !== user?.id)
        console.log(friendId, 'friendId')
        try {
            const getChatUserResponse = await get_chat_users(friendId)
            console.log(getChatUserResponse, 'getChatUserResponse')
            setUser(getChatUserResponse)
        } catch (error) {

        }
    }

    const handleCloseChat = () => {
        dispatch(ChatBoxOpen(false))
    }

    return (
        <div>
            <Box sx={{ width: '100%', height: '75vh' }}>
                <Box display='flex' alignItems='center' sx={{ height: '12vh', width: '100%', position: 'sticky' }}>
                    <Box sx={{ ml: 5, mr: 5 }}>
                        <Stack display='flex' direction='row' alignItems='center' spacing={4}>
                            <Box onClick={() => handleCloseChat()}>
                                <ChevronLeftIcon sx={{ color: "#FFFFFF", fontSize: 30 }} />
                            </Box>
                            <Box>
                                {users && users.Images ?
                                    <Avatar sx={{ width: 56, height: 56 }} src={`/images/${users.Images}`} />
                                    : <Avatar sx={{ width: 56, height: 56 }} src='' />
                                }
                            </Box>
                            <Box>
                                <Typography sx={{ color: '#FFFFFF' }}>{users && users.username}  </Typography>
                                <Typography sx={{ color: '#FFFFFF', opacity: .3 }}>Active now </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: "62.5vh", overflow: "hidden", overflowY: "scroll", }}>

                    {/* // THIRD USER MESSAGE // */}

                    <Box display='flex' justifyContent='flex-start' sx={{ ml: 2, pt: 2 }} >
                        <Stack display='flex' direction='row' spacing={2} alignItems='center'>
                            <Box>
                                <Avatar src='' />
                            </Box>
                            <Box sx={{ background: 'linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)', width: 'max-content', height: 'max-content', borderRadius: 20, p: 1.1, }}>
                                <Typography sx={{ color: '#FFFFFF' }}>hi surya</Typography>
                            </Box>
                        </Stack>
                    </Box>

                    {/* // USER MESSAGE // */}

                    <Box display='flex' justifyContent='flex-END' sx={{ mr: 2, pt: 2 }} >
                        <Stack display='flex' direction='row' spacing={2} alignItems='center'>
                            <Box sx={{ background: 'linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)', width: 'max-content', height: 'max-content', borderRadius: 20, p: 1.1, }}>
                                <Typography sx={{ color: '#FFFFFF' }}>hey yo! wasssup</Typography>
                            </Box>
                            <Box>
                                <Avatar src='' />
                            </Box>
                        </Stack>
                    </Box>


                   


                </Box>

            </Box>
            <Box sx={{ width: '100%', height: '13vh' }}>
                <Box sx={{ mt: 2 }}>
                    <Stack display='flex' direction='row' justifyContent='center' alignItems='center' spacing={2}>
                        <Box sx={{ width: '50%' }}>
                            <Textarea placeholder="Type in here…" variant="soft" sx={{ bgcolor: 'grey' }} />
                        </Box>
                        <Box sx={{ color: 'blue' }}>
                            <TagFacesIcon />
                        </Box>
                        <Box >
                            <Button variant='outlined'>send</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </div>
    )
}

export default ChatField
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack/Stack'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { ChatBoxOpen } from '../../../../services/Reducers/UserReducer'
import ChatField from './chatField/ChatField'
import ChatList from './chatList/ChatList'
import { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../../../context/userContext'
import { get_conversation } from '../../../../services/Api/user/userApi'
import { CurrentChatData } from '../../../../services/Reducers/UserDataReducer'


function InBox() {
  const chatOpen = useSelector((state: any) => state.user.value.isChatOpen)
  const dispatch = useDispatch()
  const { user } = useContext(UserContext)
  const [conversation, setConversation] = useState<any>()


  // HANDLING CHAT OPEN //

  const handleOpenChat = () => {
    console.log(chatOpen, 'chatOpen')
    dispatch(ChatBoxOpen(true))
  }

  const handleOpenDownChat = (userlist:any) => {
    dispatch(CurrentChatData(userlist))
    console.log(chatOpen, 'chatOpen')
    dispatch(ChatBoxOpen(true))
  }
  
  useEffect(() => {
    console.log(user, 'user from conversation')
    GetAllConversation(user?.id)
  }, [user])

  // FETCHING CONVERSATION //

  const GetAllConversation = async (userId: any) => {
    try {
      const getConversationResponse = await get_conversation(userId)
      console.log(getConversationResponse, 'getConversationResponse')
      setConversation(getConversationResponse)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {!chatOpen ?
        <Box display='flex' alignItems='center' sx={{ width: '100%', height: '20vh' }}>
          <Box sx={{ ml: 4 }}>
            <Stack display='flex' direction='row' spacing={4}>
              {[1, 2, 3, 4].map(() => (
                <Box onClick={() => handleOpenChat()}>
                  <Stack display='flex' direction='column' spacing={1}>
                    <Box sx={{ color: '#FFFFFF' }}>
                      <Avatar
                        alt="Remy Sharp"
                        src=""
                        sx={{ width: 56, height: 56 }}
                      />
                    </Box>
                    <Box sx={{ color: '#FFFFFF' }}>
                      <Typography>Suryajith</Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box> : ''}
      <Box sx={{ width: '100%', height: '88vh' }} >
        {!chatOpen ?
        <Box>
          {conversation&&conversation?.map((userlist:any) => (
          <Box onClick={() => handleOpenDownChat(userlist)}>
            <ChatList conversation={userlist} user={user}/>
          </Box>
          ))}
           </Box>

          : <ChatField />}
      </Box>
    </>
  )
}

export default InBox
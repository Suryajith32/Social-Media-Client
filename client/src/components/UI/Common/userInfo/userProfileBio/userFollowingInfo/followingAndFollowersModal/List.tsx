import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Stack } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { FollowFollowingModalOpen } from '../../../../../../../services/Reducers/UserReducer';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react'
import { view_all_following } from '../../../../../../../services/Api/user/userApi';
import axiosInstance from '../../../../../../../config/axios/axiosInstance';
import { UsersProfileData } from '../../../../../../../services/Reducers/UserDataReducer';
import { useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgb(225,225,225,)',
    border: '2px solid #000',
    boxShadow: 24,
};

export default function BasicModal(title: any,) {
    const [dataList, setDataList] = useState<any>()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [following, setFollowing] = useState<any>()
    const [viewFollowing,setViewFollowing] = useState<any>()
    const isOpenFolloList = useSelector((state: any) => state.user.value.isFollowingFollowersListModalOpen);
    console.log(title, ' title')

   


    const handleClose = () => {
        dispatch(FollowFollowingModalOpen(false))
    };

    useEffect(() => {
    }, [following])
    

       // FOLLOWING A USER //

       const Follow = async (friendId: any) => {
        console.log(viewFollowing,'viewAllFollowingRespone')
        const userId = title?.user
        const id = { userId, friendId }
        console.log(id, 'this is both')
        await axiosInstance.post("/follow", id, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response, 'response from follow click')
            setFollowing(response?.data?.msg)
        }).catch((err) => {
            console.log(err, 'from Follow')
        })  
    }

     // HANDLING NAVIGATION TO USERS PROFILE //

     const handleClickUser = (item:any) => {
        console.log(item,'item from listttt')
        dispatch(UsersProfileData(item))
        navigate('users-profile')
    }

    return (
        <div>
            <Modal
                open={isOpenFolloList}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ bgcolor: 'black', width: '100%', height: '80vh' }}>
                        <Box sx={{ bgcolor: 'rgba(225,225,225,0.10)', width: '100%', height: '80vh', p: 4 }}>
                            <Box display='flex' justifyContent='center'>
                                <Typography sx={{ color: '#FFFFFF' }} variant='h6'>{title?.title}</Typography>
                            </Box>
                            {title?.title === 'Following' ? 
                            <Box sx={{ mt: 3 }}>
                                {title?.followingList && title?.followingList?.map((item: any, index: number) => (
                                    <Box onClick={()=>handleClickUser(item?.list)} key={index} sx={{ mt: 2 }}>
                                        <Stack display='flex' direction='row' alignItems='center' justifyContent='space-between'>
                                            <Box >
                                                <Stack display='flex' direction='row' spacing={3} alignItems='center'>
                                                    {item?.list?.Images ?
                                                        <Avatar
                                                        src={`/images/${item?.list?.Images}`}
                                                        /> :
                                                        <Avatar
                                                        src=''
                                                        />
                                                        }
                                                    <Typography sx={{ color: '#FFFFFF' }}>{item?.list?.username}</Typography>
                                                </Stack>
                                            </Box>

                                            <Box>
                                            { title?.viewFollowing?.includes(item?.list?._id)? 
                                           <IconButton onClick={() => Follow(item?.list?._id)} color="primary" aria-label="upload picture" component="label">
                                                <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '70px', height: '4vh', bgcolor: '#FFFFFF', borderRadius: 1 }}>
                                                    <Typography sx={{ color: 'black' }} fontSize={14} fontWeight={600} >unfollow</Typography>
                                                </Box>
                                            </IconButton>:
                                             <IconButton onClick={() => Follow(item?.list?._id)} color="primary" aria-label="upload picture" component="label">
                                             <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '70px', height: '4vh', bgcolor: '#FFFFFF', borderRadius: 1 }}>
                                                 <Typography sx={{ color: 'black' }} fontSize={14} fontWeight={600} >Follow</Typography>
                                             </Box>
                                         </IconButton>
                                            }
                                            </Box>
                                        </Stack>
                                    </Box>
                                ))}
                            </Box>:
                            <>
                            <Box sx={{ mt: 3 }}>
                            {title?.followersList && title?.followersList?.map((item: any, index: number) => (
                                <Box key={index} sx={{ mt: 2 }}>
                                    <Stack display='flex' direction='row' alignItems='center' justifyContent='space-between'>
                                        <Box>
                                            <Stack display='flex' direction='row' spacing={3} alignItems='center'>
                                                {item?.list?.Images ?
                                                    <Avatar
                                                    sx={{ width: 50, height: 50 }}
                                                    src={`/images/${item?.list?.Images}`}
                                                    /> :
                                                    <Avatar
                                                    sx={{ width: 50, height: 50 }}
                                                    src=''
                                                    />
                                                    }
                                                <Typography sx={{ color: '#FFFFFF' }}>{item?.list?.username}</Typography>
                                            </Stack>
                                        </Box>

                                        <Box>
                                           { title?.viewFollowing?.includes(item?.list?._id)? 
                                           <IconButton onClick={() => Follow(item?.list?._iditem?.list?._id)} color="primary" aria-label="upload picture" component="label">
                                                <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '70px', height: '4vh', bgcolor: '#FFFFFF', borderRadius: 1 }}>
                                                    <Typography sx={{ color: 'black' }} fontSize={14} fontWeight={600} >unfollow</Typography>
                                                </Box>
                                            </IconButton>:
                                             <IconButton onClick={() => Follow(item?.list?._id)} color="primary" aria-label="upload picture" component="label">
                                             <Box display='flex' alignItems='center' justifyContent='center' sx={{ width: '70px', height: '4vh', bgcolor: '#FFFFFF', borderRadius: 1 }}>
                                                 <Typography sx={{ color: 'black' }} fontSize={14} fontWeight={600} >Follow</Typography>
                                             </Box>
                                         </IconButton>
                                            }
                                        </Box>
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                        </>
                            }
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
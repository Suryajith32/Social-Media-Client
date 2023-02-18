import { Box } from "@mui/system"
import CreatePost from "../createPostModal/createPost/CreatePost"
import Posts from "../posts/Posts"
import BottomNav from '../../SmallScreen/bottomNav/BottomNav'


function Feed() {
  return (
    <div>
      <Box>
        <Box sx={{ display: { md: 'block', lg: 'block', sm: 'none', xs: 'none' } }}>
          <CreatePost />
        </Box>
        <Box sx={{ mt: 2}}>
        {/* <BottomNav/> */}
          <Posts />
        </Box>
      </Box>
    </div>
  )
}

export default Feed
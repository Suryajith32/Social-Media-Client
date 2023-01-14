import { Box } from "@mui/system"
import CreatePost from "../../LargeScreen/createPost/CreatePost"
import Posts from "../posts/Posts"


function Feed() {
  return (
    <div>
        <Box>
            <Box sx={{display:{md:'block',lg:'block',sm:'none',xs:'none'}}}>
                <CreatePost/>
            </Box>
            <Box sx={{mt:2}}>
                <Posts/>
            </Box>
        </Box>
    </div>
  )
}

export default Feed
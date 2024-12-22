import { Box , Heading,Image,Container, Flex, Stack,Text, VStack, Button} from "@chakra-ui/react";
import { useState } from "react";

function Videos(){
    const videoArr = [
        ' https://videos.pexels.com/video-files/3042473/3042473-uhd_2560_1440_30fps.mp4',
        'https://videos.pexels.com/video-files/856986/856986-hd_1920_1080_25fps.mp4',
        'https://videos.pexels.com/video-files/853722/853722-hd_1920_1080_25fps.mp4',
        'https://videos.pexels.com/video-files/855081/855081-hd_1920_1080_25fps.mp4'

 
     ]

     const [videoSrc, setVideoSrc]= useState(videoArr[0])

    return(
       <div>
        <Stack w={"full"} h={"100vh"}  direction={["column","row"]}>
            <VStack w={"full"} >
                <video controls controlsList="noDownload" src={videoSrc} style={{width:"100%",

                }} >

                </video>
                <VStack alignItems={"flex-start"} p={4}>
                    <Heading>Sample Videos</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorem sit mollitia, quam dolorum asperiores culpa itaque, labore tempore voluptates quo blanditiis eius atque non porro quibusdam error. Veniam iure animi laboriosam repudiandae sequi maiores, dolorum consectetur similique enim delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iure sequi eligendi pariatur recusandae, provident mollitia tempore vero. Molestias, excepturi!</Text>
                </VStack>

 
            </VStack>
            <VStack w={["full","xl"]}  alignItems={"stretch"} p={8}>
               {videoArr.map((item,index)=>(
                <Button onClick={()=>
                    setVideoSrc(item)

                }>
                    Video {index+1}
                </Button>


               ))}

            </VStack> 

        </Stack>
       </div>
    );
}
export default Videos;
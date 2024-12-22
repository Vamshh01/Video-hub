import { Box , Heading,Image,Container, Flex, Stack,Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './assets/image1.jpg';
import img2 from './assets/image2.jpg';
import img3 from './assets/image3.jpg';
import img4 from './assets/image4.jpg';
import img5 from './assets/image5.png';
import { ImGlass2 } from "react-icons/im";
import { transform } from "framer-motion";

const headingOptions = {

    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50% , -50%)",
    textTransform:"uppercase",
    
    p:"4"
}




function Home(){

    return(

     

       <Box>
   

      <MyCarousel></MyCarousel>
      <Container h={"100vh"}  maxWidth={"65vw"} >
        <Heading borderBottom={"2px solid black"} w={"fit-content"} margin={"auto"}>Services</Heading>
        <Stack h={"full"} alignItems={"center"} direction={["column","row"]} p={4}>

        
        <Image src ={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}></Image>
        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur quisquam eum doloremque libero odio ab totam qui repudiandae officiis ipsa molestiae rerum rem incidunt deleniti aliquid aperiam aut illum, optio dignissimos ipsum? Corrupti enim doloremque consectetur pariatur quos alias.
            </Text>
        </Stack>
     
      </Container>

      </Box>
     

    );

};

const MyCarousel=()=>(

    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false}>
       <Box w="100%" h={"100vh"}>
            <Image src={img1}></Image>
            <Heading {...headingOptions} bgColor={"blackAlpha.500"} color={"whiteAlpha.800"}>
                Watch the Future
                </Heading>
            
            </Box>
            <Box w="100%" h={"100vh"}>

           <Image src={img2} ></Image>
           <Heading {...headingOptions} bgColor={"blackAlpha.500"} color={"whiteAlpha.800"}>Future is Gaming</Heading>
            </Box>

            <Box w="100%" h={"100vh"}>
                <Image src={img3}></Image>
                <Heading {...headingOptions} bgColor={"blackAlpha.300"}>Gaming on console</Heading>
            </Box>
            <Box w="100%" h={"100vh"}>
                <Image src={img4}></Image>
                <Heading {...headingOptions} bgColor={"blackAlpha.300"} color={"whiteAlpha.800"}>Night life is cool</Heading>
            </Box>
            
    </Carousel>
)






export default Home;
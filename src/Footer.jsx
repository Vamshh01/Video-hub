import { Box , Heading,Image,Container, Flex, Stack,Text, VStack, HStack,Button,Input } from "@chakra-ui/react";
import {AiOutlineSend} from 'react-icons/ai';

function Footer(){

    return(
        <Box minH={'40'} bgColor={"blackAlpha.900"} color={"whiteAlpha.800"} > 
        <Stack direction={["column","row"]} >
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading m={4} size={"md"}>Subscribe to my Youtube Channel</Heading>
                <HStack borderBottom={" 2px solid white"} py={2}>
               <Input  placeholder="enter your email" bgColor={"none"} outline={"none"} border={"none"} borderRadius={"none"}focusBorderColor={"none"}></Input>
                    
                    <Button p={0}
                    colorScheme="purple"
                    variant={"ghost"}
                    borderRadius={"0 20px 20px 0px"}
                     >

                <AiOutlineSend size={20}/>
                </Button>

            </HStack>
            </VStack>
            <VStack  w={"full"} justifyContent={"center"}
            borderLeft={["none","1px solid white" ]} 
            borderRight={["none","1px solid white" ]} 
            >
                 <Heading textAlign={"center"} textTransform={"uppercase"}>
                Video Hub</Heading>
                <Text>
                All rights Reserved 
                </Text>

               </VStack>
            
            <VStack w={"full"} 
            justifyContent={"center"}
            BorderLeft={["none", "1px solid white"]}
            BorderRight={["none","1px solid white"]}
            >
                <Heading  size={"md"}>Social Media </Heading>
                <Button variant={"link"} colorScheme="white"> <a href ="https://www.youtube.com/" target="_blank">Youtube</a></Button>
                <Button variant={"link"} colorScheme="white"> <a href ="https://www.instagram.com/Vamshh_01" target="_blank">Instagram</a></Button>
                <Button variant={"link"} colorScheme="white"> <a href ="https://www.github.com/Vamshh01" target="_blank">Github</a></Button>


               
            </VStack>
            


        </Stack>

        </Box>
    );
}
export default Footer;
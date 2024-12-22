import { Box , Heading,Image,Container, Flex, Stack,Text,VStack,HStack,Button,Input} from "@chakra-ui/react";
import {AiOutlineCloudUpload} from 'react-icons/ai'

function Upload(){

    return(
        <Container maxW={"container.xl"} h={"100vh"} p={16} alignItems={"center"} justifyContent={"center"}  >

            <VStack color={"purple.500"} h={"full"}justifyContent={"center"}  >
            <AiOutlineCloudUpload size={"10vmax"}/>
            <form>
                <HStack>
                    <Input type={"file"} w={"200px"} ></Input>
                    <Button colorScheme={"purple"} color={"white"}v>upload</ Button>

                </HStack>
            </form>
            </VStack>


        </Container>

   
        

    );
}
export default Upload;
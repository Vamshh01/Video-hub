import { Box , Heading,Image,Container, Flex, Stack,Text,VStack,HStack,Button,Input,Avatar} from "@chakra-ui/react";
import {Link} from "react-router-dom"

function Signup(){

    return(
        <Container h={"100vh"} maxW={"conatiner.xl"} p={16}>
            <form>
            <VStack h ={"100vh"} w={["full","96"]}  m={"auto"} my={16} alignItems={"stretch"} spacing={8}> 
                <Heading textAlign={"center"}> Sign In </Heading>
                <Avatar marginLeft={"45%"} size={"md"}></Avatar>
                
               
                    <Input  type="name" placeholder="enter your name" focusBorderColor={"purple.500"}></Input>
                    <Input  type="email" placeholder="enter your email" focusBorderColor={"purple.500"}></Input>
                    <Input  type="password" placeholder="create a password" focusBorderColor={"purple.500"}></Input>
                    <Button colorScheme={"purple"} type="submit">Sign in</Button>
                    <Text alignSelf={"flex-end"}>
                        already a User?
                        <Button marginLeft={3} variant={"link"}><Link to={"/login"}>login</Link></Button>
                    </Text>


                

                

            </VStack>
            </form>

        </Container>
    );
}
export default Signup;
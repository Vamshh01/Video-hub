import { Box , Heading,Image,Container, Flex, Stack,Text,VStack,HStack,Button,Input} from "@chakra-ui/react";
import {Link} from "react-router-dom"

function Login(){
    
   return(
    <Container maxW={"container.xl"} h={"100vh"}  p={16} >

        <VStack alignItems={"stretch"} w={["full","96"]}  h={"full"} m={"auto"} my={16} spacing={8} >
            <Heading textAlign={"center"}>Welcome Back</Heading>
            <Input type={"email"} required
             placeholder={"enter your email"}
             focusBorderColor={"purple.600"}
              >
            </Input>
            <Input type={"password"} required placeholder={"enter your password"}>

            </Input>
            <Button alignSelf={"flex-end"} 
                variant={"link"} color={"purple.500"}><Link to ={"/forgotpassword"}>Forgot Password</Link>
                
            </Button>
            <Button colorScheme={"purple"} type="submit" >
                Login
            </Button>
            <Text alignSelf={"flex-end"}>
                New User? 
                <Button variant={"link"} alignSelf={"flex-start"} marginLeft={"2"}  >
                <Link to ={"/signup"}>signup</Link>
                </Button>
               
                </Text>
                


            
            

        </VStack>

    </Container>
   );
}
export default Login;
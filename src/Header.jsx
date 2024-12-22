import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'

  import {Link} from 'react-router-dom';
  import {BiMenuAltLeft}  from 'react-icons/bi'
  

function Header(){

    const {isOpen, onOpen , onClose} = useDisclosure();

    return(<>
 <Button  pos={'fixed'} h={10} w={10} top={4} left={4} padding={0} colorScheme='purple' onClick={onOpen} zIndex={"overlay"}><BiMenuAltLeft size={25}/></Button>
 <Drawer isOpen={isOpen} placement="left" onClose={onClose}> 
    <DrawerOverlay/>
    <DrawerContent>
        <DrawerCloseButton/>
   <DrawerHeader>Video Hub</DrawerHeader>
   <DrawerBody>
    <VStack alignItems={'flex-start'}>
        <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
    <Link to ={"/"}>Home</Link>
    </Button>
    <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
    <Link to ={"/videos"}>Videos</Link>
    </Button>
    <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
    <Link to ={"/video?category=free"}>Free Videos</Link>
    </Button>
    <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
    <Link to ={"/upload"}>Upload </Link>
    </Button>
    </VStack>
    
    <HStack pos={'absolute'} bottom={10} left={0}  width={"100%"} justifyContent={"space-evenly"}>
        <Button variant={"solid"} colorScheme='purple' onClick={onClose}> 
            <Link to={"/login"} >Login</Link>
        </Button>

        <Button variant={"outline"} colorScheme='purple' onClick={onClose}>
            <Link to={"/signup"} >Sign Up</Link>
        </Button>
    </HStack>
   </DrawerBody>
    </DrawerContent>
   
    </Drawer>

 </>

    );
}
export default Header;
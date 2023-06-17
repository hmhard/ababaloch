import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Card,
  CardBody,
  CardHeader,
  Button,
  Stack,
  CardFooter,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { data } from "./data/ababaloch"

export const App = () => {
  const [ababaloch] = React.useState(data);
  const [index, setIndex] = React.useState(0);
  const [background, setBackground] = React.useState('https://picsum.photos/300/200?grayscale&blur=1');
  const length = ababaloch.length;
  const getRandom = () => {

    setIndex(Math.round(Math.random() * (length - 1) + 1));
    console.log(index);
  }
  React.useEffect(() => {
    setBackground('https://picsum.photos/300/200?blur=1&index'+index)
  
  },[index]);
    
  return <ChakraProvider  theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher  justifySelf="flex-end" />
        <VStack spacing={8}>
          <Card >
            <CardHeader>
              <Text>አማርኛ አባባሎች</Text>
            </CardHeader>
            <CardBody padding={100} backgroundPosition={'center'} backgroundSize={'cover'} backgroundImage={background}>
              <Text fontSize={'34px'} fontWeight={'700'}>{ababaloch[index]}</Text>
             
            </CardBody>
             <CardFooter justifyContent={'center'}>
              <Stack direction='row' spacing={4} top={5}  className="mt-5" >
                <Button  colorScheme='teal' variant='outline' onClick={()=>(setIndex((index)=>index-1))}>
                  Previous
                </Button><Button  colorScheme='teal' variant='outline' onClick={()=>(setIndex((index)=>index+1))}>
                  Next
                </Button>
                <Button  colorScheme='teal' variant='outline' onClick={getRandom}>
                  Random
                </Button>
              </Stack>
              </CardFooter>
          </Card>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
}

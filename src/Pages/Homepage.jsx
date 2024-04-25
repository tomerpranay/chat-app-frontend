import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate} from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import  "../logotext.css"
function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="lg" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        paddingTop="3px"
        paddingBottom="3px"
        bg="rgb(37, 36, 36)"
        // color="white"
        w="40%"
        m="40px 0 40px 0"
        borderRadius="90px"
        // borderWidth="1px"
      >
        {/* <Text fontSize="4xl" fontFamily="Work sans">
          ChatY
        </Text> */}
        <section class="wrapper">
          <div class="top">ChatY</div>
          <div class="bottom" aria-hidden="true">
            ChatY
          </div>
        </section>
      </Box>
      <Box bg="#EEE6E6" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

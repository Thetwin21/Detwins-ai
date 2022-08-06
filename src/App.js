import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import Faquestions from './Faquestions';
import alanBtn from "@alan-ai/alan-sdk-web";
import { scroller } from 'react-scroll';

const App = () => {
  const [index, setIndex] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false)
useEffect(() => {
  alanBtn({
    key: 'f793ccf062512ba084092b28076013012e956eca572e1d8b807a3e2338fdd0dc/stage',
    onCommand: (commandData) => {
      if (commandData.command === 'gotoQuestions') {
        // Call the client code that will react to the received command
        scroller.scrollTo(`accordion-item-${commandData.question_id}`,{
          duration: 1000,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
        setIndex(commandData.question_id - 1)
      }
      else if(commandData.command === 'toggleColorMode') {
        setToggleColorFlag(flag => !flag)
      }
    }
  });
}, []);
  return (
    <ChakraProvider theme={theme} >
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Faquestions index={index} setIndex={setIndex} />
    </ChakraProvider>
  )
}

export default App
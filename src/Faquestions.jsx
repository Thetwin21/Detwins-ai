import React from 'react';
import FAQ_LIST from './data.json';
import {
    Box,
    Text,
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react';

const Faquestions = ({index, setIndex}) => {
  return (
    <Flex direction='column' p='4' >
      <Box mb='8'>
         <Heading size='md'> Frequently Asked Questions</Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {FAQ_LIST.map(faq => (
          <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
            <AccordionButton onClick={()=> setIndex(faq.id -1 )}>
                <Box flex='1' textAlign='left'>
                  <Text fontWeight='semibold'>
                    {faq.question}
                  </Text>
                </Box>
            </AccordionButton>
            <AccordionPanel>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

    </Flex>
  )
}

export default Faquestions;
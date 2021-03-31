import React from 'react';
import RequestForm from '../../RequestForm';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import FulfilledButton from '../../Fulfilled';
import MessageList from '../../MessageList';

const AccordionMenu = (props) => {
    return (
      <div className="DropMenu">
        <Accordion atomic={true}>

          <AccordionItem title="Create a Task ">
            <RequestForm />
          </AccordionItem>

          <AccordionItem title="Complete Tasks ">
           
          </AccordionItem>

        </Accordion>
      </div>
    );
  }
export default AccordionMenu
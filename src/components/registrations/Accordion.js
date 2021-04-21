import React from 'react';
import RequestForm from '../../RequestForm';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import FulfilledButton from '../../Fulfilled';
import MessageList from '../../MessageList';
import RequestList from '../../RequestList';

const AccordionMenu = (props) => {
  const[requests, setRequests]= React.useState();
    return (
      <div className="DropMenu">
        <Accordion atomic={true}>

          <AccordionItem title="Create a Task ">
            <RequestForm />
          </AccordionItem>

        </Accordion>
      </div>
    );
  }
export default AccordionMenu
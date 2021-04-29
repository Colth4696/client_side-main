import React from 'react';
import RequestForm from '../../RequestForm';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import Republish from '../../Republish';
import RequestList from '../../RequestList';

const AccordionMenu = (props) => {
  const[requests, setRequests]= React.useState();
    return (
      <div className="DropMenu">
        <Accordion atomic={true}>

          <AccordionItem title="Create a Task ">
            <RequestForm />
          </AccordionItem>

          <AccordionItem title="Completed Tasks ">
            <RequestList requests={requests} setRequests={setRequests} user={props.user}/>
          </AccordionItem>

        </Accordion>
      </div>
    );
  }
export default AccordionMenu
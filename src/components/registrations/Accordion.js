import React from 'react';
import RequestForm from '../../RequestForm';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import RequestList from '../../RequestList';

const AccordionMenu = (props) => {
  return (
    <div className="DropMenu">
      <Accordion atomic={true}>

        <AccordionItem title="Create a Task ">
          <RequestForm />
        </AccordionItem>

        <AccordionItem title="Re-Issue Task">
          <RequestList user={props.user} fulfillRequest={props.fulfillRequest} request={props.request}/>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
export default AccordionMenu;
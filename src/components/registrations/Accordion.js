import React from 'react';
import RequestForm from '../../RequestForm';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const AccordionMenu = () => {
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
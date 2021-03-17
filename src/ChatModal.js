import axios from 'axios'
import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import ChatroomsList from './ChatroomsList'

const ModalChat = (props) => {
  const [currentChatroom, setCurrentChatroom] = React.useState();
  const [open, setOpen] = React.useState(false);


  const initializeChat = () => {
    const chatroom  = {
      name: props.request.title,
      request_id: props.request.id,
      volunteer_id: props.volunteer.id,
    }
      axios.post("http://localhost:3003/chatrooms", {chatroom})
      .then (response => {
        if (response.status === 200) {
          if (!chatroom.messages) chatroom.messages = [];
          setCurrentChatroom(chatroom);
          setOpen(true);
        }
        console.log(chatroom);
      })
  }

  return (
    <div className="chatButton">
    <Button onClick={initializeChat}>
      <Icon name='desktop' />
      Start Chat
    </Button>
      {open && <div style={{backgroundColor: "pink"}}><ChatroomsList user_id={props.volunteer && props.volunteer.user_id} chatroom={currentChatroom}/></div>}
    <Button onCloseClick={setOpen}>
      Close
    </Button>
      {!open}
     </div>
  )
}
export default ModalChat;

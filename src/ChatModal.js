import axios from 'axios'
import React from 'react'
import { Button, Icon} from 'semantic-ui-react'
import ChatroomsList from './ChatroomsList'

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case 'close':
//       return { open: false }
//     case 'open':
//       return { open: true, size: action.size }
//     default:
//       throw new Error('Unsupported action...')
//   }
// }

const ModalChat = (props) => {
  const [currentChatroom, setCurrentChatroom] = React.useState();
  const [open, setOpen] = React.useState();
  // const [state, dispatch] = React.useReducer(exampleReducer, {
  //   open: false,
  //   size: undefined,
  // })
  // const { open, size } = state

  const initializeChat = () => {
    const chatroom  = {
      name: props.request.title,
      request_id: props.request.id,
      volunteer_id: props.volunteer.id
    }
      axios.post("http://localhost:3003/chatrooms", {chatroom})
      .then (response => {
        if (response.status === 200) {
          console.log(response)
          let chatroom = response && response.config && response.config.data && JSON.parse(response.config.data).chatroom;
          if (!chatroom) chatroom = {};
          if (!chatroom.messages) chatroom.messages = [];
          setCurrentChatroom(chatroom);
          setOpen(true);
          // dispatch({ type: 'open', size: 'fullscreen' })
        }
      })
  }
  return (
    <>
 
      <Button onClick={initializeChat}>
        <Icon name='desktop' />
        Start Chat
      </Button>

      {/* <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Message Request Owner</Modal.Header>
        <Modal.Content> */}
        {open && <div style={{backgroundColor: "pink"}}><ChatroomsList user_id={props.volunteer && props.volunteer.user_id} chatroom={currentChatroom}/></div>}
        {/* </Modal.Content> */}
        {/* <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            No
          </Button>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            Yes
          </Button>
        </Modal.Actions> */}
      {/* </Modal> */}
    </>
  )
}

export default ModalChat
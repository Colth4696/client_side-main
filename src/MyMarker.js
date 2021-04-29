import React from "react"
import { Marker, InfoWindow } from "react-google-maps"
import RedIcon from "./red-user-icon.png"
import GreenIcon from "./green-home-icon.png"
import axios from "axios"
import ModalChat from "./ChatModal"
import FulfilledButton from "./Fulfilled"


const MyMarker = (props) => {
const [flag, setFlag] = React.useState(false);
const [chat, setChat] = React.useState(false);
const [volunteer, setVolunteer] = React.useState();
const [hasMaxVolunteers, setHasMaxVolunteers] = React.useState();
const [loadingState, setLoadingState] = React.useState('loading');

React.useEffect(() => {
 axios.get(`http://localhost:3003/volunteers`, {request_id: props.request.id})
 .then(response => {
   const volunterList = response.data.volunteers;
   let hasVolunteered = false;
   const requestVolunteers = [];
   volunterList.forEach(rv => {
     if (rv.request_id === props.request.id) {
       if (rv.user_id === props.user.id) {
         hasVolunteered = true;
         setVolunteer(rv);
       } else {
         requestVolunteers.push(rv);
       }
     }
   });
   const hasMax = requestVolunteers.length >= 5 || hasVolunteered;
   setHasMaxVolunteers(hasMax);
   setLoadingState('loaded');
 })
},[props.request.id, props.user.id])

  const toggle_open = () => {
   setFlag(!flag)
 }

 const  getIcon = () => {
   if (props.request.category === "Material" ) { return RedIcon }
   else { return GreenIcon }
 }

 const makeVolunteer = () => {
   const volunteer = {
     request_id: props.request.id,
     user_id: props.user.id
   }
     console.log(props.user)
     console.log(volunteer)
     axios.post("http://localhost:3003/volunteers", {volunteer}, {params: {_limit: 5}})
       .then(response => {
         console.log(response.data)
         if (response.data.status === "created") {
           setChat(true)
           setVolunteer(response.data.volunteer)
         }
       })
       .catch(error => {
         console.error(`error:${error}`)
       })
 }

   const MarkStyle = {
     height: "30px",
     width: "30px"
   }

   return (
     loadingState === 'loading' ? loadingState :
     <div className="marker">
       <Marker
         style={MarkStyle}
         position={props.position}
         onClick={toggle_open}
         icon={getIcon()}>
           
         {flag && <InfoWindow onCloseClick={toggle_open} user={props.user}>

           <div className="requestInfo">
<h4>Task ID:{props.request.id}</h4>
<h4>Requester ID:{props.request.user_id}</h4>
<h1>{props.request.title}</h1>
<h3>{props.request.description}</h3>
{!chat && !hasMaxVolunteers ? <button onClick={makeVolunteer}>Volunteer</button>: ''}
<div>
{volunteer && <FulfilledButton request={props.request}/>}
</div>
</div>
</InfoWindow>}
</Marker>
<div className="chatBox">
{chat && <ModalChat request={props.request} volunteer={volunteer}/>}
</div>
</div>
)
}


export default MyMarker
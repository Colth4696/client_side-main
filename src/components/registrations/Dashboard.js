import React from "react"
import MyMapComponent from "../../MapContainer"
import AccordionMenu from "./Accordion"
import Counter from "../../Counter"
import Footer from "../../Footer"
import RequestLoader from "../../RequestLoader"


const Dashboard = (props) => {
    const [defaultCenter, setDefaultCenter] = React.useState();

    React.useEffect(() => {

        const getCurrentLocation = () => {
            if  (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
              setDefaultCenter({ lat: 39.889986, lng: -104.948516 });
            }
        }
        
        const showPosition = (position) => {
        setDefaultCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
        }

        getCurrentLocation();
    }, [])

    return (
        <RequestLoader>
            <div className="Dashboard">
                <AccordionMenu user={props.user} />
                {defaultCenter && <MyMapComponent user={props.user} defaultCenter={defaultCenter} />}
                <Counter />
                <Footer />
            </div>
        </RequestLoader>
    );
}

export default Dashboard;
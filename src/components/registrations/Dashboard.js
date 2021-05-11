import React from "react"
import MyMapComponent from "../../MapContainer"
import AccordionMenu from "./Accordion"
import Counter from "../../Counter"
import Footer from "../../Footer"
import RequestLoader from "../../RequestLoader"


const Dashboard = (props) => {

    return (
        <RequestLoader>
            <div className="Dashboard">
                <AccordionMenu user={props.user} />
                <MyMapComponent user={props.user} />
                <Counter />
                <Footer />
            </div>
        </RequestLoader>
    );
}

export default Dashboard;
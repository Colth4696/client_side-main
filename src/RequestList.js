import React, { useState } from "react";
import axios from "axios";
import Republish from "./Republish";
import moment from "moment";
import { withRequests } from "./RequestProvider";

function RequestList(props) {
    const [requests, setRequests] = useState();
    const [fulfilled, setFulfilled] = useState();
    const [visible, setVisible] = useState(false);

    const apiURL = "http://localhost:3003/requests";

    const fetchData = async () => {
        let currentRequests = [];
        console.log(props.user);
        currentRequests = props.requests && props.requests.filter(request => {
            const allowRepublish = moment(request.updated_at).isBetween(moment().subtract(1, 'days'), moment());
            return request.user_id === props.user.id && allowRepublish && request.fulfilled;
        });
        console.log(currentRequests);
        setRequests(currentRequests)
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="List">
            <div className="RequestList">
                {requests && requests.length > 0 ? requests.map((request, index) => {
                    return (
                        <div className="task" key={index}>
                            <h3>Request {index + 1}</h3>
                            <h3>Owner ID: {request.user_id}</h3>
                            <h2>{request.title}
                                <div className="FilledButton">
                                    <Republish request={request} fulfilled={request.fulfilled} />
                                </div>
                            </h2>
                        </div>

                    )
                })
                    :
                    <div className="task">
                        <h3>There are no tasks to re-issue at this time.</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default withRequests(RequestList);
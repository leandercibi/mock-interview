import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import image from '../assets/check.png'

const CongratsPopup = (props) => {
    let date = props.value;
    let time = props.time;

    return (

        <Modal
            {...props}
            size="sm"
            style={{ "text-align": "center" }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div><img src={image} style={{ width: "50px", margin: "3px" }} />
            </div>
            <div className="p-1 " style={{ color: " #6d55f1", fontSize: "15px", fontWeight: "bold" }}>Congratulation, Your Mock Interview is Booked Successfully!</div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }} >
                <div >Time : {time}</div>
                <div > On {date.toDateString()}</div>
            </div>
            <div className="p-3"  ><Button style={{ "minWidth": "180px" }} id="btn-practice" onClick={props.onHide}>Done</Button></div>
            <div className="p-3 " style={{ "fontSize": "10px" }} >*Privacy & Security Terms*</div>
        </Modal>

    )
}

export default CongratsPopup


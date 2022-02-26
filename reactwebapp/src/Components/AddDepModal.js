import { Component } from "react";
import { Modal,Button,Row, Col,Form, FormGroup } from "react-bootstrap";

export class AddDepModal extends Component{
    constructor(props){
        super(props);
    }
    handleSubmit(event){
        event.preventdefault();
        fetch(process.env.REACT_APP_API + "department",{
            method : "POST",
            headers :{
                "Accept" : "application/json",
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                DepartmentId : null,
                DepartmentName : event.target.DepartmentName.value
            })
        })
        .then(res =>res.json()).then(result => {alert(result)},error =>{alert("Failed !")})
    }
    render(){

        return(
            <div className="container">
                <Modal {...this.props} size="lg" aria-labelledby ="contained-model-title-vcenter" centered>
                    
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Add Department</Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="DepartmentName">
                                        <Form.Label>DepartmentName</Form.Label>
                                        <Form.Control type="text" name="DepartmentName" required placeholder="DepartmentName"></Form.Control>
                                    </FormGroup>
                                    <FormGroup >
                                        <Button variant="primary" type="submit">Add Department</Button>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>                    
                </Modal>
            </div>
        )
    }
}

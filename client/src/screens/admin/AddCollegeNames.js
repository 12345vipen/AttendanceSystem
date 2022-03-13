import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addCollegeName } from "../../service/Api";
import './AddCollegeNames.css';
import {useAuth,useCollegeUpdate} from '../../context/AuthContext'

export default function AddCollegeNames() {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [adminEmailId, setadminEmailId] = useState("");

  const updateCollege = useCollegeUpdate()
    const dummy = useAuth()

  function validateForm() {
    return name.length > 0 && logo.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    addCollegeName({name:name,logo:logo,adminEmailId:adminEmailId});
    updateCollege(name)
  }

  return (
    <div className="addcollegenames-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>College Name</Form.Label>
          <Form.Control
            autoFocus
            type="string"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>College Logo URL</Form.Label>
          <Form.Control
            type="string"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="adminEmailId">
          <Form.Label>Admin Email Id</Form.Label>
          <Form.Control
            type="string"
            value={adminEmailId}
            onChange={(e) => setadminEmailId(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Create college
        </Button>
      </Form>
      <button onClick={()=>{
          console.log(dummy.currentCollege)
      }}> Check value</button>
    </div>
  );
}
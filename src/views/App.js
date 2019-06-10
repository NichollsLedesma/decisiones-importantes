import React, { useState } from 'react'
import { Row, Col, Button } from "reactstrap"
import Formulary from '../components/formulary'
import List from '../components/list'


let App = () => {
  let [people, setPeople] = useState([])
  let [nameSelected, setNameSelected] = useState('')
  let handleSubmit = values => {
    let aux = { id: people.length + 1, name: values }
    setPeople(people.concat(aux))

  },
    random = () => {
      setNameSelected(people[Math.floor(Math.random() * people.length)])

    }

  return (
    <div className="container mt-5">
      <h1>Decisiones importantes</h1>
      <Row>
        <Col md={6}>
          <List listado={people} />
        </Col>
        <Col md={6}>
          <Formulary saveName={handleSubmit} />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Button onClick={random}>Random</Button>
        </Col>.
        <Col md={6}>
          <h1> {nameSelected.name}</h1>
        </Col>
      </Row>
    </div>
  )
}

export default App

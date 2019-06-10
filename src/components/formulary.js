import React, { useState } from 'react'
import { Form, Button, Input, Label } from "reactstrap"

let Formulary = props => {
    let [name, setName] = useState(''),
        saveName = () => {
            props.saveName(name)
            setName('')
        }
    return (
        <div>
            <h1>New</h1>
            <Form >
                <Label>Nombre</Label>
                <Input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <Button onClick={saveName} >Save</Button>
            </Form>
        </div>
    )
}

export default Formulary
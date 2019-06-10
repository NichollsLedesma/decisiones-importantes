import React  from 'react'
import { ListGroup, ListGroupItem  } from "reactstrap"

let List = props => {
    let {listado} = props
    let renderList = () => {
        return (
            <ListGroup>
                {listado && listado.map((item, i) => {
                    return <ListGroupItem key={i}>{item.name}</ListGroupItem>
                })}
            </ListGroup>
        )
    }
    return (
        <div>
            <h1>List</h1>
            {listado && (listado.length !== 0) ? renderList() : <p>No hay elementos que mostrar</p>}
        </div>
    )
}

export default List
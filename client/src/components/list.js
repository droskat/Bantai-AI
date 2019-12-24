import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class List extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Dennish' },
            { id: uuid(), name: 'Thakur' },
            { id: uuid(), name: 'Khosu' },
            { id: uuid(), name: 'Ruhi' }
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}
                >Add Item</Button>
                <ListGroup >
                    <TransitionGroup className="default-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} className="fader">
                                <ListGroupItem>
                                    <Button
                                    className="remove-Btn"
                                    color= "danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state =>({
                                            items:state.items.filter(item => item.id !== id)
                                        }));
                                    }}
                                    >
                                    &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>

                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default List;
import React, {  useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

const Viewuser1 = () => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',



    });
    // const history = useHistory();

    const { id } = useParams();
    useEffect(() => {
        loadUser();

    }, []);


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(result.data);
        console.log(result.data);

    };
    return (

        <div>

            <Card style= {{ center:500  }}>
                <Card.Body>
                    <Card.Title className='demo'>User Id: {id}</Card.Title><br />
                    <Card.Text>
                        <ListGroup>

                            <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                            <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                            <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>


                            <br />
                            <Link className="btn btn-primary" to="/adminpage">Back to AdminPage</Link>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>


    )
};
export default Viewuser1;

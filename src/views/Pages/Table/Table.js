import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, FormGroup, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import auth from '../../../firebase'


class Table1 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      currentUser: [],
      message: '',
        // nameTile : this.props.location.state.names
      // name:this.props.params.name
    }
    
  }

 

  // logout = e => {
  //   e.preventDefault()
  //   auth.signOut().then(response => {
  //     this.setState({
  //       currentUser: null,
  //     })
  //   })
  //   console.log(this.state.currentUser);
  // }

  render() {
    const { message, currentUser } = this.state
    

    return (
      <div className="animated fadeIn">
        {/* <button onClick={this.logout}>Logout</button> */}
        {/* <Row className="justify-content-center">
          <Col xs="12" lg="6">
            <FormGroup row>
              <Col md="12">
                <InputGroup>
                  <Input type="email" id="input2-group2" name="input2-group2"  />
                  <InputGroupAddon addonType="append">
                    <Button type="button" color="primary">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </FormGroup>
          </Col>
        </Row> */}
        <Row>
      
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table 
              </CardHeader>
              <CardBody>
              <div className="justify-content-center row" style={{marginBottom:'20px'}}>
              <Col md="6">
                <InputGroup>
                  <Input type="email" id="input2-group2" name="input2-group2"  />
                  <InputGroupAddon addonType="append">
                    <Button type="button" color="primary">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              </div>

                <Table responsive>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Samppa Nori</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Estavan Lykos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Chetan Mohamed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Derick Maximinus</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Friderik Dávid</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}


export default Table1;


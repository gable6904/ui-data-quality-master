import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Breadcrumbs</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/breadcrumbs/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
       
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Breadcrumbs;

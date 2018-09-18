/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import {Button, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Jumbotron, Row} from 'react-bootstrap';
import '../public/css/report-style.scss';
import {Link} from 'react-router-dom'
import LoaderComponent from "./components/LoaderComponent";
import LoginAppHeader from "./partials/LoginAppHeader";

class LoginView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isHidden:false
        }
    }

    validateUser(){
        console.log(this.username.value);
        console.log(this.password.value);
        if(this.username.value == "admin" && this.password.value == "admin"){
            this.setState({isHidden: false})
            this.props.history.push("/dashboard");
        }
        else{
            this.setState({isHidden: true})
            // this.props.history.push("/");
        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={4}>
                    <Jumbotron className="login-jumbotron">
                        <img src="/images/logo-inverse.svg" alt="wso2" title="wso2" className="logo login-logo"/>
                        <p className="login-P"><span>Open Banking Conformance Suite</span></p>
                        
                            <h2 className="login-head">Login</h2>
                            <Form horizontal className="login-form">
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel}>
                                    Username
                                    </Col>
                                    <Col>
                                    <FormControl type="text" placeholder="Enter Username"  inputRef={(ref) => {this.username = ref}}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel}>
                                    Password
                                    </Col>
                                    <Col>
                                    <FormControl type="password" placeholder="Enter Password" inputRef={(ref) => {this.password = ref}}/>
                                    </Col>
                                </FormGroup>

                                {/* { this.state.isHidden ? <div className="login-error-span"><span style={{color: "red"}}><i className="fas fa-times-circle"/>Incorrect Username or password</span></div> : null } */}

                                <FormGroup>
                                    <Col>
                                    <Checkbox>Remember me</Checkbox>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Button bsStyle={"secondary"} type="submit" onClick={()=>this.validateUser()}>Login</Button>
                                </FormGroup>
                            </Form>
                        </Jumbotron>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </div>
        )
    }
}

export default LoginView;
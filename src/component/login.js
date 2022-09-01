import React, { Component } from "react";
import image from "../logo.svg";

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-md-8 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 p-5 border-right">
                                        <h5>Sign In</h5>
                                        <form className="pt-4">
                                            <div className="form-group">
                                                <label className="mb-2" > Username <span className="text-danger">*</span></label>
                                                <input type="text" autoComplete="off" className="form-control" name="name" />
                                            </div>
                                            <div className="form-group mt-4">
                                                <label className="mb-2" > Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" name="name" />
                                            </div>
                                            <div className="form-group mt-4">
                                                <input type="submit" className="btn btn-primary w-100" value="Submit" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="login-img">
                                            <img src={image} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login

import React, { Component } from "react";
import pic from "../../assets/contact.svg";
import "./Contact.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      mobile: "",
      age: "",
      email: "",
      showDetails: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showDetails: true });
  };
  render() {
    return (
      <div className="home-container">
        <div className="content-container">
          <div className="content contact-content">
            <img src={pic} alt="contact" />
            <div class="details-container">
              {!this.state.showDetails ? (
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <h2>CONTACT US</h2>
                  </div>
                  <div>
                    <label for="fname">First Name</label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="John"
                      value={this.state.fname}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label for="lname">Last Name</label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Doe"
                      value={this.state.lname}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label for="mobile">Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      required
                      value={this.state.mobile}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label for="age">Age</label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      required
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="johndoe@example.com"
                      required
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="btn-container">
                    <button type="submit">SUBMIT</button>
                  </div>
                </form>
              ) : (
                <form className="details-form">
                  <div>
                    <label for="fname">First Name</label>
                    <div className="detail">{this.state.fname}</div>
                  </div>
                  <div>
                    <label for="lname">Last Name</label>
                    <div className="detail">{this.state.lname}</div>
                  </div>
                  <div>
                    <label for="mobile">Mobile Number</label>
                    <div className="detail">{this.state.mobile}</div>
                  </div>
                  <div>
                    <label for="age">Age</label>
                    <div className="detail">{this.state.age}</div>
                  </div>
                  <div>
                    <label for="email">Email</label>
                    <div className="detail">{this.state.email}</div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import axios from "axios";
import React, { Component } from "react";

class AuthorForm extends React.Component {
  state = {
    author: {
      authorId: "",
      firstName: "",
      lastName: "",
      email: "",
      contactno: "",
    },
  };
  handleChange = (event) => {
    const author = { ...this.state.author };
    author[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ author: author });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit");
    const author = {
      firstName: this.state.author.firstName,
      lastName: this.state.author.lastName,
      email: this.state.author.email,
      contactno: this.state.author.contactno,
    
      
    };
    axios
      .post("http://localhost:8080/lms/addAuthor", author)
      .then((res) => {
        this.props.history.push("/authors");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h3>Author Register</h3>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto border border-dark p-3 mt-5"
        >
          <div className="mb-3">
            <label for="exampleInputname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="emailHelp"
              value={this.state.author.firstName}
              name="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="emailHelp"
              value={this.state.author.lastName}
              name="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email id
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.author.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              ContactNo
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.author.contactno}
              name="contactno"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthorForm;

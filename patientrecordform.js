import React from 'react';
import './patientrecord.css';

class PForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    

    }

    submituserRegistrationForm(e) {
      console.log(this.validateForm());
      
      e.preventDefault();
      if (this.validateForm()) {
          console.log(this.state);
          let fields = {};
          fields["username"] = "";
          fields["dateofbirth"] = "";
          fields["age"] = "";
          fields["height"] = "";
          fields["bloodgroup"] = "";
          fields["weight"] = "";
          fields["diabeteslevel"] = "";
          fields["pressurelevel"] = "";
          this.setState({fields:fields});
          console.log(this.state);
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["dateofbirth"]) {
        formIsValid = false;
        errors["dateofbirth"] = "*Please enter your Date Of Birth";
      }

      if (typeof fields["dateofbirth"] !== "undefined") {
        //regular expression for email validation
        if (!fields["dateofbirth"].match(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/)) {
          formIsValid = false;
          errors["dateofbirth"] = "*Please enter your date of birth in correct format";
        }
      }

      if (!fields["age"]) {
        formIsValid = false;
        errors["age"] = "*Please enter your age";
      }

      if (typeof fields["age"] !== "undefined") {
        if (!fields["age"].match(/^(1[89]|[2-9]\d)$/)) {
          formIsValid = false;
          errors["age"] = "*Please enter age in numbers";
        }
      }
      if (!fields["height"]) {
        formIsValid = false;
        errors["height"] = "*Please enter your height";
      }

      if (typeof fields["height"] !== "undefined") {
        if (!fields["height"].match(/^[0-9]+$/)) {
          formIsValid = false;
          errors["height"] = "*Please enter height in numbers";
        }
      }
      if (!fields["weight"]) {
        formIsValid = false;
        errors["weight"] = "*Please enter your weight";
      }

      if (typeof fields["weight"] !== "undefined") {
        if (!fields["weight"].match(/^[0-9]+$/)) {
          formIsValid = false;
          errors["weight"] = "*Please enter your weight in digits";
        }
      }
      if (!fields["bloodgroup"]) {
        formIsValid = false;
        errors["bloodgroup"] = "*Please enter your blood group.";
      }

      if (typeof fields["bloodgroup"] !== "undefined") {
        if (!fields["bloodgroup"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["bloodgroup"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["diabeteslevel"]) {
        formIsValid = false;
        errors["diabeteslevel"] = "*Please enter your diabetes level.";
      }

      if (typeof fields["diabeteslevel"] !== "undefined") {
        if (!fields["diabeteslevel"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["diabeteslevel"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["pressurelevel"]) {
        formIsValid = false;
        errors["pressurelevel"] = "*Please enter your pressure level.";
      }

      if (typeof fields["pressurelevel"] !== "undefined") {
        if (!fields["pressurelevel"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["pressurelevel"] = "*Please enter alphabet characters only.";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="brownmain-registration-container2">
     <div id="brownregister2">
        
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
          <div className='brownkris2'>
        <label>Name</label>
        <input type="browntext12" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.username}</div>
        <label>Date Of Birth:</label>
        <input type="browntext22" name="dateofbirth" value={this.state.fields.dateofbirth} onChange={this.handleChange}  />
        <div className="brownerrorMsg">{this.state.errors.dateofbirth}</div>
        <label>Age:</label>
        <input type="browntext32" name="age" value={this.state.fields.age} onChange={this.handleChange}   />
        <div className="brownerrorMsg">{this.state.errors.age}</div>
        <label>Height:</label>
        <input type="browntext42" name="height" value={this.state.fields.height} onChange={this.handleChange}   />
        <div className="brownerrorMsg">{this.state.errors.height}</div>
        <label>Weight:</label>
        <input type="browntext52" name="weight" value={this.state.fields.weight} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.weight}</div>
        <label>Blood group:</label>
        <input type="browntext62" name="bloodgroup" value={this.state.fields.bloodgroup} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.bloodgroup}</div>
        <label>Diabetes Level:</label>
        <input type="browntext72" name="diabeteslevel" value={this.state.fields.diabeteslevel} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.diabeteslevel}</div>
        <label>Pressure Level:</label>
        <input type="browntext82" name="pressurelevel" value={this.state.fields.pressurelevel} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.pressurelevel}</div>
        <input type="submit" className="brownbutton22"  value="SUBMIT"/>
        </div>
        </form>
    </div>
</div>

      );
  }


}

export default PForm;
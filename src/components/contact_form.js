import React from 'react';

class ContractForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {

            form:{
            firstName: '',
            lastName: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        // console.log(event.target.value);
        // console.log(event.target.name);
        const { value, name } = event.target;

        const { form } = this.state;

        form[name] = value;

        this.setState({
            form: {...form}
        });
    }

    handleSubmit(){
        event.preventDefault();
        console.log(this.state.form);
    }




    render() {

        const {firstName, lastName} = this.state.form;
        return (
            <form>
                <div className='form-group'>
                <label>First Name</label>
                    <input onChange={this.handleInputChange} value={firstName} name='firstName' type='text' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                    <label>Last Name</label>
                    <input onChange={this.handleInputChange} value={lastName} name='lastName' type='text' className='form-control'></input>
                    </div>
                    <button onSubmit={this.handleSubmit}>Add Contact</button>
            </form>
        )        
    }
}

export default ContractForm;
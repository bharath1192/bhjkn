import React from "react";
// import DatePicker from 'npm install react-date-picker'
import Modal from "./Modal";
import './userlist.css'


class OpenModal extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.activity)
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
      date:null
    };
  }

  toggleModal() {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }
  handleDate=(e)=>{
    this.setState({
      date:""
    })
  }

  render() {
    
    return (
      
      <div>
        <button onClick={this.toggleModal} className="button">{this.props.activity.real_name}</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
         
          <div key={this.props.activity.id}><b>ID:</b> {this.props.activity.id}</div><br/>
          <div><b>Name:</b> {this.props.activity.real_name}</div><br/>
          <label><b>ActivityStartTime</b>:</label>
         <div> {this.props.activity.activity_periods[0].start_time}</div>
         <div>{this.props.activity.activity_periods[1].start_time}</div>
         <div>{this.props.activity.activity_periods[2].start_time}</div><br/>
         <label><b>ActivityEndTime</b>:</label>
         <div>{this.props.activity.activity_periods[0].end_time}</div>
         <div>{this.props.activity.activity_periods[1].end_time}</div>
         <div>{this.props.activity.activity_periods[2].end_time}</div>
        {/* {console.log(this.state.time)} */}
        <form>
         {/* <DatePicker name="date" id="date"  onChange={this.handleDate} /> */}
        </form>
        </Modal>
      </div>
    );
  }
}

export default OpenModal;

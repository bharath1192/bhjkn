class DatePicker extends React.Component {

    render () {
        <form>
         <input type="text" name="jobNumber" onChange={this.props.onChange} /> 
         <DatePicker name="dateCmmenced" onChange={this.props.onChange}  />
        </form>
    }
}
export default DatePicker;
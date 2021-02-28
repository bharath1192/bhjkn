import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const BackgroundStyle = {
      backgroundColor: "rgba(220,220,220,0.5)",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };

    const ModalStyle = {
      maxWidth: 400,
      minHeight: 200,
      backgroundColor: "#fff",
      margin: "auto",
      padding: 5
    };

    const HeaderStyle = {
      height: 20,
      width: "100%"
    };

    const CloseBtnStyle = {
      float: "right",
      cursor: "pointer",
      display: "block"
    };

    return (
      <div style={BackgroundStyle}>
        <div style={ModalStyle}>
          <div style={HeaderStyle}>
            <span style={CloseBtnStyle} onClick={this.props.onClose}>
              X
            </span>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
//   onClose: PropTypes.function,
  isOpen: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;

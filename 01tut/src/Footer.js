import React from 'react'
import PropTypes from "prop-types";

const Footer = ({length}) => {
    const today =  new Date();
  return (
    <footer>
      <p>{length} List {length === 1 ? "Item" : "Items"}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

Footer.propTypes = {
  length: PropTypes.number
}

export default Footer
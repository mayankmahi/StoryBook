import React from 'react'
import PropTypes from "prop-types";
import { PieChart } from 'react-minimal-pie-chart';

// color
// data
// label
export const Chart = ({title, label, value, color, totalValue, background, ...props}) => {
  return (
    <>
    <PieChart label={label}/>
    </>
  )
}

Chart.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    totalValue: PropTypes.number.isRequired,
    background: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

Chart.defaultProps = {
    onClick: undefined,
}
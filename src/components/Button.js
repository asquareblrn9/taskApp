import PropTypes from 'prop-types';
const Button = ({ color, text, onClick}) => {
    return (
        <div>
            <button style={{backgroundColor: color}} className='btn' onClick={onClick}>Add</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button

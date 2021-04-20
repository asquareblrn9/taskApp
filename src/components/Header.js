import Button from './Button'
const Header = () => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>Task tracker </h1>
            <Button color='green' text='add' onClick={onClick} />
        </header>
    )
}

export default Header

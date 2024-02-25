import '../assets/css/Header.css';
function Header (props) {
  return (
    <header>
      <ul className='header-list list'>
        <li className='header-brand'>Logo</li>
        <li>
          <input type='text' className='header-search' placeholder='Search' />
        </li>
      </ul>
    </header>
  )
}

export default Header

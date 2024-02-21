import './Nav.css';
function Nav() {


  return (

    <div className='container-nav'>
      <nav>

        <button id='matricula'>Matrícula</button>
        <div className='navlinks'>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">A escola</a></li>
            <li><a href="">Extracurricular</a></li>
          </ul>
        </div>
        <div className="nav_logo">
          <img src="" alt="" />
        </div>
        <button id='login'>Login</button>
      </nav>
    </div>

  );
}
export default Nav;
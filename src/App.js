// import logo from './logo.svg';
import './App.css';
const displayFeaturesDropdown = () =>{
  const featuresDropdown = document.querySelector('.features-dropdown');
  const arrowIcon = featuresDropdown.querySelector('div');
  const featuresOptions = document.querySelector('.features');
  if(arrowIcon.classList.contains('down-arrow-icon')){
    arrowIcon.classList.remove('down-arrow-icon');
    arrowIcon.classList.add('up-arrow-icon');
    featuresOptions.classList.add('visible');
    featuresOptions.classList.remove('invisible')
    return;
  } else{
    arrowIcon.classList.add('down-arrow-icon');
    arrowIcon.classList.remove('up-arrow-icon');
    featuresOptions.classList.remove('visible');
    featuresOptions.classList.add('invisible');
    return;
  }
}
const displayCompanyDropdown = () =>{
  const companyDropdown = document.querySelector('.company-dropdown');
  const arrowIcon = companyDropdown.querySelector('div');
  const companyOptions = document.querySelector('.company-options');
  console.log(companyOptions)
  if(arrowIcon.classList.contains('down-arrow-icon')){
    arrowIcon.classList.remove('down-arrow-icon');
    arrowIcon.classList.add('up-arrow-icon');
    companyOptions.classList.add('visible');
    companyOptions.classList.remove('invisible');
    return;
  } else {
    arrowIcon.classList.add('down-arrow-icon');
    arrowIcon.classList.remove('up-arrow-icon');
    companyOptions.classList.remove('visible');
    companyOptions.classList.add('invisible');
    return;
  }
}
function App() {
  return (
    <div className='App-content-container'>
      <div className="main-card">
        <div className='App-nav-bar'>
          <div className='App-logo'>
          </div>
          <div class='dropdown-menu'>
            <div className='features-dropdown'>
              <button id='featuresBtn' onClick={displayFeaturesDropdown}>Features</button>
              <div className='down-arrow-icon'></div>
            </div>
            <div className='dropdown-options features invisible'>
              <div id='todoListOption'>
                <div id='todoListIcon'></div>
                <div><h5>Todo List</h5></div>
              </div>
              <div id='calendarOption'>
                <div id='calendarIcon'></div>
                <div><h5>Calendar</h5></div>
              </div>
              <div id='remindersOption'>
                <div id='remindersIcon'></div>
                <div><h5>Reminders</h5></div>
              </div>
              <div id='planningOption'>
                <div id='planningIcon'></div>
                <div><h5>Planning</h5></div>
              </div>
            </div>
          </div>
          <div className='dropdown-menu'>
            <div className="company-dropdown">
              <button id='companyBtn' onClick={displayCompanyDropdown}>Company</button>
              <div className='down-arrow-icon'></div>
            </div>
            <div className="dropdown-options company-options invisible">
              <div id="historyOption">
                <h5>History</h5>
              </div>
              <div id="ourTeamOption">
                <h5>Our Team</h5>
              </div>
              <div id="blogOption">
                <h5>Blog</h5>
              </div>
            </div>
          </div>
          <button id='careersBtn'>Careers</button>
          <button id='aboutBtn'>About</button>
          <div></div>
          <button id='loginBtn'>Log In</button>
          <button id='registerBtn'>Register</button>
        </div>
        <div className='App-hero-section'>
          <div className="text-content">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
            <div className='footer-icons'>
              <div id='databizIcon'></div>
              <div id="audiophileIcon"></div>
              <div id="meetIcon"></div>
              <div id="makerIcon"></div>
            </div>
          </div>
          <div className='App-hero-image'>
          </div>
        </div>     
      </div> 
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Atul Shince</a>.
      </div>
    </div>
  );
}

export default App;

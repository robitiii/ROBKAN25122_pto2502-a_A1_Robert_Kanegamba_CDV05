import RobKane from '../assets/RobKane.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h2>Hi Folks</h2>
          <p className="intro-text">
            I'm Robert Kanegamba a passionate developer who is building the next big thing tomorrow one step at a time.
          </p>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="view-work-btn">
            View My Work →
          </button>
        </div>
        <div className="home-image">
          <img src={RobKane} alt="Robert Kanegamba" className="home-profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;

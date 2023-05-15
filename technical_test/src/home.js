import './home.css';
import imageLogo from './images/pobl-logo.png';
import imageName from './images/pobl-logo-name.png'

const Home = () => {
    return (
        <div className='logo-container'>
            <div className='logo-one'>
                <img src={imageLogo} width="800px" height="300px"></img>
            </div>
            <div className='logo-two'>
                <img src={imageName} width="150px" height="100px"></img>
            </div>
        </div>
    )
}

export default Home;


import profilePic from './assets/Ziggy.jpg';

function Card(){
    return(
        <div className="card" src="">
            <img class="cardImage" alt="profile picture" src={profilePic}></img>
            <h2 className="cardTitle">Ziggy Manuel</h2>
            <p className="cardText">I like to eat and sleep and be very grumpy!</p>
        </div>
    );
}

export default Card
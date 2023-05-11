import '../css/Home.css'


const Home = () => {
    return (
        <div>
        <div>
            <h1> Welcome Purple Crochet!</h1>


            <div className="container" style={{width: 20 + 'rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Sign In!</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username</li>
                        <li className="list-group-item">Email</li>
                        <li className="list-group-item">Password</li>
                        <a href="#" className="card-link">Sign In</a>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Sign Up</a>
                        <a href="#" className="card-link">Forgot Password?</a>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
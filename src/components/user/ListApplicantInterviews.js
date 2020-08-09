import React from 'react'

const ListApplicantInterviews = () => {

    return (
        <div className="user-jobs">
            {/* <!-- user name --> */}
            <h3 className="user-name">
                <i className="fas fa-user" aria-hidden="true"></i>
                Mohamed Salah
                <hr/>
            </h3>
            
            <div className="job-cards">

                <div className="alert alert-primary" role="alert">
                    The interviews you have made
                </div>

                <div className="card">
                    <div className="card-header">
                        <span>Football Soccer</span>
                    </div>
                    <div className="card-body">
                    <p className="card-text">
                        Salah started his senior career with Egyptian club El Mokawloon, departing shortly thereafter to join Swiss side Basel for an undisclosed fee. In Switzerland, his performances attracted Premier League side Chelsea, who signed him for in 2014. However, he was used sparingly in his debut season and was allowed to leave on loan to Serie A clubs Fiorentina and Roma, with the latter eventually signing him permanently for €15 million.
                    </p>
                    <div className="card-footer">
                        <small>Joined at: 2020-08-07 00:14:19</small> 

                        <a href="/interview.html" className="button-more btn btn-primary">More</a>

                    </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <span>Football Soccer</span>
                    </div>
                    <div className="card-body">
                    <p className="card-text">
                        Salah started his senior career with Egyptian club El Mokawloon, departing shortly thereafter to join Swiss side Basel for an undisclosed fee. In Switzerland, his performances attracted Premier League side Chelsea, who signed him for in 2014. However, he was used sparingly in his debut season and was allowed to leave on loan to Serie A clubs Fiorentina and Roma, with the latter eventually signing him permanently for €15 million.
                    </p>
                    <a href="#" className="btn btn-primary">More</a>
                    </div>
                </div>

                <div className="card">
                    <h5 className="card-header">Football Soccer</h5>
                    <div className="card-body">
                    <p className="card-text">
                        Salah started his senior career with Egyptian club El Mokawloon, departing shortly thereafter to join Swiss side Basel for an undisclosed fee. In Switzerland, his performances attracted Premier League side Chelsea, who signed him for in 2014. However, he was used sparingly in his debut season and was allowed to leave on loan to Serie A clubs Fiorentina and Roma, with the latter eventually signing him permanently for €15 million.
                    </p>
                    <a href="#" className="btn btn-primary">More</a>
                    </div>
                </div>

                <div className="card">
                    <h5 className="card-header">Football Soccer</h5>
                    <div className="card-body">
                    <p className="card-text">
                        Salah started his senior career with Egyptian club El Mokawloon, departing shortly thereafter to join Swiss side Basel for an undisclosed fee. In Switzerland, his performances attracted Premier League side Chelsea, who signed him for in 2014. However, he was used sparingly in his debut season and was allowed to leave on loan to Serie A clubs Fiorentina and Roma, with the latter eventually signing him permanently for €15 million.
                    </p>
                    <a href="#" className="btn btn-primary">More</a>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ListApplicantInterviews
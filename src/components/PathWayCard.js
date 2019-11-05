import React from "react";
import "../style/pathWay.scss"

// structure the cards
function PathWay() {
    return (
        <React.Fragment>
            <h1 className="h1">Non Profits that can help you </h1>
            <div className="card mb-3 taco">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="imageSize" alt="Right Move logo" src="https://www.charlottecentercity.org/wp-content/uploads/2017/01/right-moves-for-youth.jpg"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2>Right Moves for Youth</h2>
                            <p>Right Moves for Youth (RMFY) is a school-based,
                                 youth development and student support program focused
                                on helping teens develop the skills to succeed in school and life.</p>
                            <a className="btn btn-success" href="https://www.rightmovesforyouth.org/sign-me-up/" target="_blank" >Apply now</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )}
export default PathWay;



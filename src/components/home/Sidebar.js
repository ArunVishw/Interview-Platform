import React from 'react'
import { Data } from '../../context/DataContext'

export default function Sidebar() {
    return (
        <Data.Consumer>{ (context) => {
            return (
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-5">
                    <div className="box border-bottom">
                            <div className="bg-primary text-center py-1 text-white">Connect with me</div>
                            <div className="bg-light px-2 py-3">
                            <ul className="list-group list-group-flush">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <a className="text-white btn-floating btn-fb btn-sm" href="/"><i className="fab fa-facebook-f"></i></a> Cras justo odio
                                    </li>
                                    <li className="list-group-item">
                                        <a className="btn-floating btn-tw btn-sm" href="/"><i className="fab fa-twitter"></i></a>Dapibus ac facilisis in
                                    </li>
                                    <li className="list-group-item">
                                        <a className="text-white btn-floating btn-li btn-sm" href="/"><i className="fab fa-linkedin-in"></i></a>Morbi leo risus
                                    </li>
                                    <li className="list-group-item">
                                        <a className="text-white btn-floating btn-slack btn-sm" href="/"><i className="fab fa-slack-hash"></i></a>Porta ac
                                    </li>
                                    <li className="list-group-item">
                                        <a className="text-white btn-floating btn-yt btn-sm" href="/"><i className="fab fa-youtube"></i></a>Vestibulum at eros
                                    </li>
                                </ul>
                            </ul>
                            </div>
                    </div>

                    <div className="box border-bottom">
                            <div className="bg-primary text-center py-1 text-white mt-3">Box1</div>
                            <div className="bg-light px-2 py-3">
                                Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                            </div>
                    </div>
                </div>
            )
        }}</Data.Consumer>
    );
}

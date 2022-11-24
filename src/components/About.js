import React, { useState } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color: '#212635',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === '#212635') {
            setmyStyle({
                color: 'white',
                backgroundColor: '#212635',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }

        else {
            setmyStyle({
                color: '#212635',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <>
            <div className="container" style={myStyle}>
                <h1 className="my-3">About us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h3><i>About Me</i></h3>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p align="center">
                                    <img src="https://readme-typing-svg.herokuapp.com?color=0d8eceF&size=30&center=true&vCenter=true&width=550&height=70&duration=2500&lines=Hello+World!+👋;+I'm+Debargha+Mitra+Roy;+An+Open+Source+Contributor+🌟;A+Full+Stack+Web+Developer+💻;+An+Android+Developer+📱;Loves+To+Build+Projects+🛠;A+Problem+Solver+🕵;+A+Competitive+Programmer+👨‍💻" alt="About Developer"></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h3><i>About TextUtils</i></h3>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p align="center">
                                    <img src="https://readme-typing-svg.herokuapp.com?color=0d8eceF&size=30&center=true&vCenter=true&width=650&height=70&duration=2500&lines=A+WebApp+for+all+of+your+Text+Utilities;+TextUtils+is+a+utility;+which+can+be+used+to+manipulate;+your+text+in+the+way+you+want" alt="About TextUtils"></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h3><i>Contact with Developer</i></h3>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Made with by ❤️ & ☕ by <b>Debargha Mitra Roy</b>.
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
            </div>
        </>
    )
}

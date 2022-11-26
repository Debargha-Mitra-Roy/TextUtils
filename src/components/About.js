export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#212212640635',
        backgroundColor: props.mode === 'dark' ? '#212640' : 'white',
    }

    return (
        <>
            <div className="container">
                <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#212640' }}>About TextUtils</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h3><i>Analyze your Text</i></h3>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count or anything else.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h3><i>Free to use</i></h3>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>TextUtils</strong> is a free character counter tool that provides instant character count & word count statistics for a given text. <strong>TextUtils</strong> reports the number of words and characters. Thus it is suitable for writing text with word or character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h3><i>Browser Compatible</i></h3>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This word counter software works in any web browsers such as <b>Chrome</b>, <b>Firefox</b>, Internet <b>Explorer</b>, <b>Safari</b>, <b>Opera</b>. It suits to count characters in <b><i>FaceBook</i></b>, <b><i>Blog</i></b>, <b><i>Books</i></b>, <b><i>Excel Document</i></b>, <b><i>pdf Document</i></b>, <b><i>Essays</i></b>, etc.
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="text-center">
                        Made with by ❤️ & ☕ by <b>Debargha Mitra Roy</b>
                    </p>
                </div>
            </div>
        </>
    )
}

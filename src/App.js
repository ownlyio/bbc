import './App.css'

import background from './img/bg.webp'

function App() {
    return (
        <section id="app" className="background-image-cover h-screen" style={{"backgroundImage": `url(${background})`}}>
            <div className="container h-full">
                <div className="d-flex justify-content-center align-items-center h-full">
                    <div className="app-wrap">
                        <h1 className="app-title text-center font-size-280 font-size-md-350 font-size-lg-430 font-size-xl-500 text-white rubik-regular">BICOL BLOCKCHAIN CONFERENCE</h1>
                        <p className="app-sub text-center font-size-150 font-size-md-180 font-size-lg-230 font-size-xl-300 text-white alegreya-regular mb-0">11.11.2022 | Legazpi City, Albay</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App

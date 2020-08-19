import React from 'react';
import '../../style/main.scss';
import Slider from '../components/imageSlider';

function Home() {
    return (
        <div className="Home">
            <Slider />
            <div className="document">
                <h2>How To Use Ubuntu Store:</h2><br />
                <h4>Method 1</h4>
                <p>Got Store Page</p>
                <p>Choose your App and Click To Download button</p>
                <p>Copy the Given Commands One by One and Run in Terminal</p>
                <h4>Method 2</h4>
                <p>Go to Store Page</p>
                <p>Choose your App and Click To Download button</p>
                <p>Then Download the Installer file</p>
                <p>Open Terminal and Navigate to Your Download Folder</p>
                <p>Then Run The Following Command "python %FILE_NAME%" (replace %FILE_NAME% with the downloaded file's name)</p>
                <h4>Method 3</h4>
                <div className="first-time">
                    <h6><u>Just For First Time</u></h6>
                    <p>Download Our Script File: <a href="./store.py" download> Download</a></p>
                    <p>run "mv ./Downloads/store.py ../%USER_NAME%" (replace %USER_NAME% with Your PC User Name)</p>
                </div>
                <p>Go to Store Page</p>
                <p>Choose your App and Click To Download button</p>
                <p>Click To "Copy Installer Command" button</p>
                <p>Run the Copied Command to Your Terminal</p>
            </div>
        </div>
    );
}

export default Home;

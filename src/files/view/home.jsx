import React from 'react';
import '../../style/main.scss';
import Slider from '../components/imageSlider';

function Home() {
    return (
        <div className="Home">
            <Slider />
            <div>
                <h2>How To Use Ubuntu Store:</h2><br />
                <h4>Method 1 :</h4>
                <ul type="circle">
                    <li>Got Store Page</li>
                    <li>Choose your App and Click To Download button</li>
                    <li>Copy the Given Commands One by One and Run in Terminal</li>
                </ul>
                <h4>Method 2 :</h4>
                <ul type="circle">
                    <li>Go to Store Page</li>
                    <li>Choose your App and Click To Download button</li>
                    <li>Then Download the Installer file</li>
                    <li>Open Terminal and Navigate to Your Download Folder</li>
                    <li>Then Run The Following Command "python %FILE_NAME%" (replace FILE_NAME with the downloaded file's name)</li>
                </ul>
                <h4>Method 3 :</h4>
                <ul type="circle">
                    <ul style={{ background: "gray", padding: "10px", color: "white" }}>
                        <h6><u>Just For First Time</u></h6>
                        <li>Download Our Script File: <a href="./store.py" download> Download</a></li>
                        <li>run "mv ./Downloads/store.py ../%USER_NAME%" (replace USER_NAME with Your PC User Name)</li>
                    </ul>
                    <li>Go to Store Page</li>
                    <li>Choose your App and Click To Download button</li>
                    <li>Click To "Copy App Id" button</li>
                    <li>Run "python store.py %ID%" (replace %ID% with The Copied App ID)</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;

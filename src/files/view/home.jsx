import React from 'react';
import '../../style/main.scss';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Slider from '../components/imageSlider';

function Home() {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="Home">
            <Slider />
            <div className="document">
                <h2>How To Use Ubuntu Store:</h2><br />
                <Divider /><br />
                <h4>Method 1</h4>
                <p>Go to Store Page</p>
                <p>Choose your App and Click To Download button</p>
                <p>Copy the Given Commands One by One and Run in Terminal</p>
                <h4>Method 2</h4>
                <p>Go to Store Page</p>
                <p>Choose your App and Click To Download button</p>
                <p>Then Download the Installer file</p>
                <p>Open Terminal and Navigate to Your Download Folder</p>
                <p>Then Run The Following Command :</p>
                <p className="command">python %FILE_NAME%</p>
                <p> [Note : replace %FILE_NAME% with the downloaded file's name]</p>
                <h4>Method 3</h4>
                <div className="first-time">
                    <Button variant="contained" color="secondary" onClick={() => setOpen(!open)}>Haven't configured installer file?</Button>
                    {open ? (<Card elevation="4">
                        <p>Download Our Script File : <a href="./store.py" download>Download</a></p>
                        <p>Run the following command :</p>
                        <p className="command">cd ~ && mv ./Downloads/store.py ./</p>
                    </Card>) : ""}
                </div>

                <p>Go to Store Page</p>
                <p>Choose your App and Click To Download button</p>
                <p>Click To "Copy Installer Command" button</p>
                <p>Run the Copied Command to Your Terminal</p><br />
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import '../../style/main.scss';
import Rating from '@material-ui/lab/Rating';


function Appdetail(props) {
    const data = props.details[0];
    const commands = []
    const [bg, setbg] = React.useState("#007bff")
    const copy = (command, index) => {
        navigator.clipboard.writeText(command)
        commands[index].outerHTML = `<svg style="background-color:green" class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>`;
    }
    const downloadPyFile = () => {
        var code = `import os\n${data.command.map((a) => `os.system("${a}")\n`).join('')}`
        var filename = `${data.name}.py`;
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/x-python;charset=utf-8,' + encodeURIComponent(code));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <img alt="appicon" src={data.src} style={{ height: "35px", marginRight: "20px" }} />
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Rating name="half-rating-read" defaultValue={parseFloat(data.rating)} precision={0.5} readOnly />
                    <h6 style={{ marginTop: "4px" }}>{data.download} downloads</h6>
                </div>
                <br />
                <div>{data.description}</div>
                <br />
                <h5 style={{ fontWeight: "bold" }}>Commands: </h5>
                {data.command.map((a, index) =>
                    <div key={index} className="copytoclip">
                        <h6>{a}</h6>
                        <FileCopyOutlinedIcon ref={(ref) => commands[index] = ref} onClick={() => copy(a, index)} />
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={downloadPyFile}>Download installer file</Button>
                <Button style={{ backgroundColor: bg }} onClick={() => { navigator.clipboard.writeText(`python store.py ${data.id}`); setbg("green") }}>Copy Installer Command</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default Appdetail;
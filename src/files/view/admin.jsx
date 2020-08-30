import React from 'react';
import '../../style/main.scss';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../../firebase'
import Software from '../components/appCard'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: "10px",
        padding: "30px",
        width: "600px"
    },
    margin: {
        marginTop: "20px",
        marginBottom: "20px"
    },
    btn: {
        width: "100%"
    }
}));

const Input = (props) => {
    const classes = useStyles();
    return (
        <TextField
            onChange={props.click}
            value={props.value}
            className={classes.margin}
            id="outlined-secondary"
            label={props.name}
            variant="outlined"
            color="secondary"
            fullWidth
        />
    )
}

function Admin() {
    const classes = useStyles();
    const [data, setData] = React.useState({
        id: "",
        name: "",
        src: "",
        download: "",
        category: "",
        rating: "",
        description: "",
        command: []
    });
    const [com, setCom] = React.useState("");
    const add = () => {
        if (com !== "") {
            data.command.push(com); setCom("")
        }
    }
    const handleChange = (e) => {
        setData({ ...data, category: e.target.value })
    }
    const see = () => {
        console.log(data)
    }

    const remove = (a) => {
        const result = data.command.filter(word => word != a);
        setData({ ...data, command: result })
    }
    const submit = () => {
        let appid;
        db.ref('apps').on('value', snapshot => {
            appid = Object.keys(snapshot.val())
        })
        setData({ ...data, id: appid.length + 1 })

        db.ref('apps').push(data)
        setData({
            id: "",
            name: "",
            src: "",
            download: "",
            category: "",
            rating: "",
            description: "",
            command: []
        })
    }
    return (
        <div className="Admin">
            <Grid container>
                <Grid item md={12} lg={6}>

                    <Card className={classes.card}>
                        <Input name="Name" value={data.name} click={(e) => setData({ ...data, name: e.target.value })} />
                        <Input name="Image Source" value={data.src} click={(e) => setData({ ...data, src: e.target.value })} />
                        <Input name="Download" value={data.download} click={(e) => setData({ ...data, download: e.target.value })} />
                        <Input name="Rating" value={data.rating} click={(e) => setData({ ...data, rating: e.target.value })} />
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                            <Select
                                native
                                value={data.category}
                                onChange={handleChange}
                                label="Category"
                            >
                                <option aria-label="None" value="" />
                                <option value="All">All</option>
                                <option value="IDE">Text Editor/IDE</option>
                                <option value="Database">Database</option>
                                <option value="Programming">Programming</option>
                                <option value="Graphics">Graphics</option>
                                <option value="Internet">Internet</option>
                                <option value="Offic">Offic</option>
                                <option value="Media">Media</option>
                                <option value="Social">Social</option>
                                <option value="Tools">Tools</option>
                            </Select>
                        </FormControl>
                        <Input name="Description" value={data.description} click={(e) => setData({ ...data, description: e.target.value })} />
                        <Input name="Command" value={com} click={(e) => setCom(e.target.value)} />
                        <Button variant="contained" size="medium" color="primary" onClick={add}>Add</Button>
                        <Typography variant="h6">
                            Commands
                        </Typography>
                        <div>
                            {
                                data.command.map((a, i) =>
                                    <List key={i}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={a}
                                            />
                                            <ListItemSecondaryAction onClick={() => remove(a)}>
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>
                                )
                            }
                        </div>
                        <Button onClick={see} variant="contained" size="medium" color="primary" className={classes.btn}>
                            Apply
                </Button>
                    </Card>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Software name={data.name} rating={data.rating} src={data.src} />
                </Grid>
            </Grid>
        </div >
    );
}

export default Admin;

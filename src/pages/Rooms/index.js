import {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";

import "./styles.scss";

export default function Rooms() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/rooms')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    const remove = (id) => {
        if (false === window.confirm('tem certeza?')) {
            return;
        }

        fetch ('http://localhost:8080/api/rooms/' + id, {method: 'DELETE'});

        setData(data.filter((item) => item.id !== id));
    } 

    return (
        <div className="page-rooms">
            {data.map(item => (
                <Card>
                    <CardMedia
                    sx={{ height: 140 }}
                    image="https://static.baratocoletivo.com.br/2023/0118/g_b661e7ef75.jpg"
                    title="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <Chip label={item.room_type.name} color="success"/>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" variant="outlined" color="error" onClick={() => remove(item.id)}>Excluir</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}
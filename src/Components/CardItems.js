import * as React from 'react'
import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
// import { makeStyles } from '@material-ui/styles'
import '../Styles/Projectspage.css'

/*passing in properties from Cards*/

function CardItems(props) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                style={{ paddingTop: 0 }}
                component="img"
                height="200"
                image={`${process.env.PUBLIC_URL}/projectImages/${props.image}`}
                alt={props.title}
            >
                {/* {props.image} */}
            </CardMedia>
            <CardContent className="content">
                <Typography id="title-project">{props.title}</Typography>
                <Typography className="desc">{props.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default CardItems
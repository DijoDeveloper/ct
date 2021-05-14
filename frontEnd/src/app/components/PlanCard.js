import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => (
    {
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        card: {
            minWidth: 275,
            maxWidth: 300,
            marginRight: 20,
            cursor: 'pointer'
        },
        media: {
            height: 0,
            paddingTop: '46.25%', // 16:9
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            marginBottom: 16,
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        actions: {
            display: 'flex',
        },
        expand: {
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
            marginLeft: 'auto',
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }
);
class SimpleCard extends Component {
    state = { expanded: false };
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };
    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        const imageUri = {
            silver: "https://htmlcolorcodes.com/assets/images/colors/silver-color-solid-background-1920x1080.png",
            gold: "https://image.shutterstock.com/image-illustration/gold-gradient-abstract-background-soft-260nw-1210664107.jpg",
            platinum: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNn0lk5f2ftgu94T3fW5EjulGeL-ecbpztA&usqp=CAU"
        }
        return (
            <div className={classes.root}>
                <Card onClick={() => this.props.onSubmit()} className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={imageUri[this.props.title]}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        {/* <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography> */}
                        <Typography component="p">
                            <ul>
                                <li>No of Profiles Registered : 1</li>
                                <li style={{ marginTop: 5 }}>Get Contact Details : 5 times</li>
                                <li style={{ marginTop: 5 }}>No of SMS send : 10</li>
                                <li style={{ marginTop: 5 }}>No of Agencies from which the profiles will be show: 1</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    <center>
                        <Button style={{ marginBottom: 10 ,fontSize: 20 }} size="small" color="primary">
                        ₹ 1209
                        </Button>
                    </center>
                </Card>
            </div>
        );
    }
}
SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleCard);

import React, { Component } from 'react';
import { Rating } from '@material-ui/lab'
import {Card, CardContent, CardMedia, Button, Typography} from '@material-ui/core'

export default class NewsItem extends Component {
    render() {
        const { imgSrc, title, subTitle, content, rate } = this.props;
        return (
            <>
                <Card style={{ display: "flex", marginBottom: "10px" }}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={imgSrc}
                        title="Contemplative Reptile"
                        style={{ width: "500px" }}
                    />
                    <CardContent style={{ paddingTop: 0, padding: "30px" }}>
                        <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {subTitle}
                        </Typography>
                        <Rating name="disabled" value={rate} disabled />
                        <Typography variant="body2" color="textPrimary" component="p">
                            {content}
                        </Typography>
                        <Button variant="contained" style={{ marginTop: "10px" }}>Read More</Button>
                    </CardContent>
                </Card>
            </>
        );
    }
}
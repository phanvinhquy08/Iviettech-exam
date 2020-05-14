import React, { Component } from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';

export default class SidebarItem extends Component {
    render() {
        const {imgSrc, title, content} = this.props;
        return (
            <>
                <Card style={{ display: "flex",padding: "10px" }}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={imgSrc}
                        title="Contemplative Reptile"
                        style={{ width: "100px", height: "100px" }}
                        height="100px"
                    />
                    <CardContent style={{paddingTop : "0px"}}>
                        <Typography  variant="p" component="p" style={{ fontWeight: "bold" }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content}
                        </Typography>
                    </CardContent>
                </Card>
            </>
        )
    }
}

import React, { Component } from 'react';
import { Paper, TextField, Checkbox } from '@material-ui/core'

export default class Login extends Component {
    render() {
        const styleDiv = {
            textAlign: "center",
            backgroundColor: "#FFF",
            padding: "16px",
            color: "#F47555",
            marginBottom: "16px"
        }
        return (
            <Paper elevation={3} className="login" style={styleDiv}>
                <h2>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h2>
                <p>Công nghệ đang thay đổi nhanh chóng, hãy cùng vươn ra thế giới với những bài viết chất lượng từ Fullstack Station bạn nhé.</p>
                <form>
                    <TextField
                        error
                        id="outlined-error"
                        label="TÊN CỦA BẠN"
                        variant="outlined"
                        style={{
                            marginBottom: "10px",
                        }}
                        InputProps={{
                            style: {
                                color: "#FFF"
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                color: "#F47555"
                            }
                        }}
                    />
                    <TextField
                        error
                        id="outlined-error"
                        label="EMAIL CỦA BẠN"
                        variant="outlined"
                        style={{
                            marginBottom: "10px",
                        }}
                        InputProps={{
                            style: {
                                color: "#FFF"
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                color: "#F47555"
                            }
                        }}
                    />
                    <br />
                    <div>
                        <Checkbox
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <label>Would you like to receive the latest gmail notification?</label>
                        <p>Bạn sẽ nhận được email thông báo khi cfos bài viết mới, mình khồn spam vì mình cũng rất ghét :)</p>
                    </div>
                </form>
            </Paper >
        )
    }
}

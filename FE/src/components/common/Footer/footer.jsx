import { Box, Container, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

import Grid from '@mui/material/Unstable_Grid2';
import * as image from 'assets/images'
import queryString from "query-string";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosPublic from "utils/axiosPublic";

const linkContact = [
    {label: 'Về Sneaker Store', link: ''},
    {label: 'Cửa hàng', link: ''},
    {label: 'Trợ giúp', link: ''},
    {label: 'Hợp tác', link: ''},
] 

function Footer() {    
    const [brand, setBrands] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axiosPublic
            .get("brand/public")
            .then((res) => { setBrands(Array.isArray(res) ? res : res.data || []) })
            .catch((err) => { console.log(err) });
    }, [])

    return (
        <Container sx={{ bgcolor: 'text.primary', pt: 4, mt: 2 }} maxWidth='xl'>
            <Grid container spacing={4}>
                <Grid xs={4}>
                    <Box component='img' src={image.logoDark} height={60} mb={1} />
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        pl: 0, py: 0.25,
                                        fontSize: 16, fontWeight: 600,
                                        borderWidth: 0, verticalAlign: 'text-top',
                                        color: 'background.paper'
                                    }}
                                >Địa chỉ: </TableCell>
                                <TableCell
                                    sx={{
                                        pl: 0, py: 0.25,
                                        fontSize: 16, borderWidth: 0,
                                        color: 'background.paper'
                                    }}
                                >Ấp Đồng Khởi, xã Tân Ân Tây, Huyện Ngọc Hiển, Tỉnh Cà Mau</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        pl: 0, py: 0.25,
                                        fontSize: 16, fontWeight: 600,
                                        borderWidth: 0, color: 'background.paper'
                                    }}
                                >E-mail: </TableCell>
                                <TableCell
                                    sx={{
                                        pl: 0, py: 0.25,
                                        fontSize: 16, borderWidth: 0,
                                        color: 'background.paper'
                                    }}
                                >waipayttt@gmail.com</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        pl: 0, py: 0.25,
                                        fontSize: 16, fontWeight: 600,
                                        borderWidth: 0, color: 'background.paper'
                                    }}
                                >Hotline: </TableCell>
                                <TableCell
                                    sx={{
                                        pl: 0, py: 0.25,
                                        fontSize: 16, borderWidth: 0,
                                        color: 'background.paper'
                                    }}
                                >0945 603 347</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box mt={1}>
                        <Link to=''><img src={image.linkFB} alt="" /></Link>
                        <Link to=''><img src={image.linkIT} alt="" /></Link>
                        <Link to=''><img src={image.linkPR} alt="" /></Link>
                        <Link to=''><img src={image.linkTT} alt="" /></Link>
                        <Link to=''><img src={image.linkYB} alt="" /></Link>
                    </Box>
                </Grid>
                <Grid xs={4}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <Typography variant="h6" color='background.paper' mb={2}>Thương hiệu</Typography>
                                {Array.isArray(brand) && brand.length !== 0 && brand.map((item, idx) => (
                                    <Box 
                                        key={idx}
                                        color='background.paper' 
                                        mb={(idx !== brand.length - 1) ? 1 : 0}
                                        sx={{ 
                                            textTransform: 'uppercase',
                                            '&:hover': {
                                                color: 'text.accent',
                                                textDecoration: 'underline',
                                                cursor: 'pointer'
                                            }
                                        }}
                                        onClick={() => {
                                             navigate({
                                                pathname: '/product/',
                                                search: queryString.stringify({ brand: item._id })
                                            })}
                                        }
                                    >
                                        {item.name}
                                    </Box >
                                ))}
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant="h6" color='background.paper' mb={2}>Thông tin</Typography>
                                {linkContact.length !== 0 && linkContact.map((item, idx) => (
                                    <Box 
                                        key={idx}
                                        component={Link} to={item.link}
                                        mb={(idx !== linkContact.length - 1) ? 1 : 0}
                                        color='background.paper' 
                                        display='block'
                                        sx={{ 
                                            '&:hover': {
                                                color: 'text.accent',
                                                textDecoration: 'underline',
                                                cursor: 'pointer'
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Box >
                                ))}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid xs={4}>
                    <Box
                        component='iframe' title="ggmap"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1300.2528704610388!2d104.99930441876768!3d8.753341001894892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a407627c269def%3A0x77e6cce1fb5f3b30!2zVOG6oXAgaMOzYSBuZ3V5ZW4gc2FuZw!5e0!3m2!1svi!2sus!4v1701531341881!5m2!1svi!2sus" 
                        loading="lazy" 
                        sx={{ width: '100%', height: '100%' }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
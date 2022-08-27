import { Box, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';

const CardTop = () => {

    const items = [
        { title: 14123, name: "ممبر های ربات", colorName: "warning.main", shadow_img: "shadow-img1", src: "/img/card-top/card1.png" },
        { title: 20, dicTitle: "میلیون تومان ", name: "جوایز هر هفته", colorName: "secondary.main", shadow_img: "shadow-img2", src: "/img/card-top/card2.png" },
        { title: 4, dicTitle: "+ ", name: "سال سابقه فعالیت", colorName: "primary.main", shadow_img: "shadow-img3", src: "/img/card-top/card3.png" },
    ];

    return (
        <Box data-aos="flip-right" marginTop={7}>
            <Grid sx={{ justifyContent: { xs: "center" } }} container spacing={{ xs: 0, sm: 2, md: 3, lg: 4 }}>
                {items.map((item, index) => (
                    <Grid sm={6} md={4} key={index} item xs={12}>
                        <Box className="w-100 relative text-center">
                            <Box
                                component="img"
                                alt="card top"
                                src={item.src}
                                className="w-100 img-card-top"
                            />
                            <Box top={{ xs: "40px", sm: "27px", md: "25px", lg: "26px" }} className="absolute w-100">
                                <Box className={item.shadow_img}>.</Box>
                                <Typography variant='h5' component="h6" color={item.colorName}>
                                    <CountUp
                                        end={item.title}
                                        duration={10}
                                        decimal=","
                                    />
                                    {item.dicTitle}
                                </Typography>
                                <Typography variant='p' component="p" color="gray" pt={1}>{item.name}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CardTop;

import { Box, Grid, Typography, Link } from '@mui/material';

const CardBottom = () => {

    const items = [
        { name: "شرکت در مسابقه", shadow_img: "shadow-img-bottom1", src: "/img/card-bottom/card1.png" },
        { name: "شروع با جایزه", shadow_img: "shadow-img-bottom2", src: "/img/card-bottom/card2.png" },
        { name: "مشاهده جوایز", shadow_img: "shadow-img-bottom3", src: "/img/card-bottom/card3.png" },
    ];

    return (
        <Box data-aos="flip-left" marginTop={{ xs: 0, md: 8 }}>
            <Grid sx={{ justifyContent: { xs: "center" } }} spacing={{ xs: 0, sm: 2, md: 3, lg: 4 }} container>
                {items.map((item, index) => (
                    <Grid sm={6} md={4} item xs={12} key={index}>
                        <Link href="#">
                            <Box className="w-100 relative text-center">
                                <Box
                                    component="img"
                                    alt='card'
                                    src={item.src}
                                    className="w-100 img-card-bottom"
                                />
                                <Box className="absolute h2-card-bottom w-100">
                                    <Box className={item.shadow_img}></Box>
                                    <Typography className="font-light" variant='subtitle1' component="h4" color="gray">{item.name}</Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
};

export default CardBottom;

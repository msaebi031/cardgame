import { Box, Grid, Typography } from '@mui/material';

const CardCenter = () => {

    const items = [
        {
            title: "مسابقات ما", name: "هر ماه مسابقاتی بین اعضای ربات برگزار میشود و به برترین ها جایزه نفیسی داده می شود", src: "/img/card-center/card1.png"
        },
        { title: "پشتیبانی", name: "ربات دارای چندین پشتیبان مختلف و 24 ساعته می باشد که در کمترین زمان پاسخگوی شما هستند", src: "/img/card-center/card2.png" },
        { title: "قابلیت ها", name: "ربات ها هر روز در حال آپدیت شدن هستن و ما فضای بهتری را برای شما به ارمغان می آوریم", src: "/img/card-center/card3.png" },
    ];

    return (
        <Box data-aos="fade-up" marginTop={{ xs: 0, md: 3 }} id="Property">
            <Box textAlign="center" color="light" >
                <Typography marginBottom={2} variant='h4' component="h3">ویژگی های ربات</Typography>
                <Typography variant='body2' className="font-light" component="h2" color="gray">بهترین ها و بهترین بازی های شلم و حکم رو با ما تجربه کنید .</Typography>
            </Box>
            <Grid id="cardcenter" sx={{ justifyContent: { xs: "center" } }} spacing={{ xs: 0, sm: 2, md: 3, lg: 4 }} container>
                {items.map((item, index) => (
                    <Grid sm={6} md={4} key={index} item xs={12}>
                        <Box className="w-100 relative text-center">
                            <Box
                                component="img"
                                alt='card center'
                                src={item.src}
                                className="w-100"
                            />
                            <Box bottom={{ xs: "12px", md: "8px", lg: "29px" }} className="absolute w-100">
                                <Typography marginBottom={1.3} variant='h6' color="light" component="h6">{item.title}</Typography>
                                <Typography padding="20px" variant='body2' component="p" className="font-light" color="gray">{item.name}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CardCenter;

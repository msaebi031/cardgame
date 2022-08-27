import { Box, Grid, Typography, Button } from '@mui/material';


const MainTop = () => {
    return (
        <Box data-aos="flip-left" marginTop={{ xs: 7, md: 9 }} id="Ability">
            <Grid textAlign={{ xs: "center", sm: "right" }} spacing={{ xs: 0, sm: 2, md: 6, lg: 6 }} container>
                <Grid item sm={8} md={7} marginTop={{ xs: 1, sm: 5, lg: 13 }}>
                    <Typography marginBottom={1.6} variant='h4' component="h3" color="light">قابلیت های ربات</Typography>
                    <Typography className="font-light" variant='body2' component="p" color="gray" marginBottom={1}>ربات های ما با قابلیت های فراوانی ساخته شده اند که کاربران ربات بتوانند نهایت لذت را از بازی در ربات ها ببرند. ربات های ما هر هفته جوایزی هم برای کاربران خود دارد که به بهترین بازیکنان هر هفته و هر ماه جوایز نقدی پرداخت می شود ، علاوه بر آن با بررسی دقیق و 24 ساعته توانسته ایم فضایی کاملا خوب برای اکثر افراد ایجاد کنیم و با بازی کردن در فضای دوستانه لذت آن را 2 چندان کرده ایم.</Typography>
                    <Button href="https://t.me/PersianCards_bot" color="secondary" variant="contained" className='font-light button-style' size="large" sx={{ display: { xs: "none", md: "inline-block" } }}>شروع کردن</Button>
                </Grid>
                <Grid item sm={4} md={5}>
                    <Box component="img" alt='main top' className="w-100" src="/img/main/main-top.png" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainTop;


import { Box, Grid, Typography, Button } from '@mui/material';


const MainBottom = () => {
    return (
        <Grid data-aos="flip-right" textAlign={{ xs: "center", sm: "right" }} marginTop={{ xs: 4, md: 9 }} spacing={{ xs: 0, sm: 2, md: 3, lg: 4 }} container id="awards">
            <Grid item sm={4} md={5}>
                <Box sx={{ marginTop: { xs: 6 } }}>
                    <Box component="img" alt='main bottom' className="w-100" src='/img/main/main-bottom.jpg' />
                </Box>
            </Grid>
            <Grid item sm={8} md={7} marginTop={{ xs: 0, sm: 8, md: 12, lg: 18 }}>
                <Typography marginBottom={1.6} variant='h4' component="h3" color="light">جوایز</Typography>
                <Typography className="font-light" variant='body2' component="p" color="gray" marginBottom={1}> شما می توانید در بازی کردن در ربات علاوه بر سرگرم شدن و لذت بردن کسب درآمدم کنید ، در ربات بصورت هفتگی و ماهانه به نفراتی که بیشترین بازی هارو انجام داده اند یا بهترین امتیاز هارو کسب کرده اند ، جوایزی اهدا می شود . علاوه بر آن هر هفته 1 مسابقه و 1 چالش برگزار می شود و هر کاربر با توجه به توانایی خود می تواند برنده این مسابقات باشد و یک هدیه ی فوق العاده ویژه دریافت نماید.</Typography>
                <Button href="https://t.me/PersianCards_bot" color="secondary" variant="contained" className='font-light button-style' size="large" sx={{ display: { xs: "none", md: "inline-block" } }}>شروع کردن</Button>
            </Grid>
        </Grid>
    );
};

export default MainBottom;
import { Box, Grid, Typography } from '@mui/material';

const Content = () => {
  return (
    <Grid sx={{ justifyContent: { xs: "center", sm: "right" }, mt: 10 }} textAlign={{ xs: "center", sm: "right" }} container>
      <Grid item xs={12} sm={7} md={6.2} marginTop={{ xs: 1, sm: 2, md: 3, lg: 5, }}>
        <Box>
          <Typography sx={{ fontSize: { sm: "2rem", md: "3rem", lineHeight: 1.4 } }} marginBottom={1} variant='h2' component="h1" color="light">به بهترین سایت بازی های تلگرامی خوش آمدید</Typography>
          <Typography sx={{ fontSize: { sm: ".8rem", md: "0.875rem" } }} className="font-light" variant='body2' component="p" color="gray" py={{ xs: 2, sm: .6, md: .6, lg: 2 }}> با ربات های ما از جمله ربات حکم و شلم وارد بازی شوید و ساعت ها بدون دغدغه و رایگان از بازی لذت ببرید ، علاوه بر آن شما میتوانید با بهتر بازی کردنتان کسب درآمد هم کنید و از این فضای دوستانه ایجاد شده نهایت استفاده را ببرید</Typography>
        </Box>
        <Box sx={{ justifyContent: { xs: "center", sm: "right" }, ml: "11px", display: { xs: "flex" } }} marginTop={{ xs: 3, sm: 3, md: 3 }}>
          <a href="https://t.me/ShelemJokerbot" className="content-button relative">
            <Box alt="header-button" component="img" className='w-100' src="/img/button-right.png"/>
            <Box className="absolute w-100">
              <Typography color="secondary.secondary" variant='body1' component="h2" sx={{ bottom: "20px", right: "33px" }} className="absolute font-light">بازی شلم</Typography>
            </Box>
          </a>
          <a href="https://t.me/PersianCards_bot" className="content-button relative">
          <Box alt="header-button" component="img" className='w-100' src="/img/button-left.png"/>
            <Box className="absolute w-100">
              <Typography variant='body1' color="block.main" component="h2" sx={{ bottom: "20px", right: "46px" }} className="absolute font-light">بازی حکم</Typography>
            </Box>
          </a>
        </Box>
      </Grid>
      <Grid data-aos="zoom-in-up" marginTop={{ xs: 4, sm: 2, md: 0 }} item xs={12} sm={5} md={5.8}>
        <Box component="img" alt="img-header" className="w-100" src='/img/header.jpg'/>
      </Grid>
    </Grid>
  );
};

export default Content;

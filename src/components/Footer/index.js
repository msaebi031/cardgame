import { Box, Link, Typography } from '@mui/material';

const Footer = () => {

    return (
        <Box marginTop={8} textAlign="center">
            <Typography className="font-light" variant='body2' component="p" color="gray">&copy; تمامی حقوق سایت محفوظ می باشد و هر گونه کپی برداری پیگرد قانونی دارد.</Typography>
            <Link href="https://Target-Designer.com/">
                <Typography my={2} className="font-light" variant='body1' component="p" color="primary.main"> طراح و پشتیبانی گروه تارگت دیزاینر | Target Designer</Typography>
            </Link>
        </Box>
    );
};

export default Footer;

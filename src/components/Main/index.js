import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import MainBottom from './MainBottom';
import MainTop from './MainTop';

const Main = () => {
    const Comment = dynamic(() => import("./Swiper"), {
        ssr: false,
      });

    return (
        <Fragment>
            <MainTop />
            <MainBottom />
            <Comment/>
        </Fragment>
    );
};

export default Main;

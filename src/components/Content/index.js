import { Fragment } from 'react';
import CardBottom from './CardBottom';
import CardCenter from './CardCenter';
import CardTop from './CardTop';

const Content = () => {
    return (
        <Fragment>
            <CardTop />
            <CardCenter />
            < CardBottom />
        </Fragment>
    );
};

export default Content;

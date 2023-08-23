import React from 'react';
import i18n from './../../../services/i18n/i18n';

const Forbidden = () => {
    return (<p>{i18n.t('forbidden.errorMessage')}</p>);
}

export default Forbidden;

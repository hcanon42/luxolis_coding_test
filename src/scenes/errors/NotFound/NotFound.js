import React from 'react';
import i18n from './../../../services/i18n/i18n';

const NotFound = (t) => {
    return (<p>{i18n.t('notFound.errorMessage')}</p>);
}

export default NotFound;

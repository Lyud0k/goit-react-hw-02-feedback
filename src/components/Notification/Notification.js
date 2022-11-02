import css from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({message}) => {
    return (
        <p className={css.text}>{message}</p>
    )
}

Notification.protoType = {
    message: PropTypes.string,
}

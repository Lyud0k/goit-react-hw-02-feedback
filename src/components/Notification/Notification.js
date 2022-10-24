import css from 'components/Notification/Notification.module.css';

export const Notification = ({message}) => {
    return (
        <p className={css.text}>{message}</p>
    )
}
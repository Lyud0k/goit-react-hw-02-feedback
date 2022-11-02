import css from 'components/SectionTitle/SectionTitle.module.css';
import PropTypes from 'prop-types';

export const SectionTitle = ({title, children}) => {
    return (
        <div>
            
            <h2 className={css.text}>{title}</h2>{children}
</div>
    )
}

SectionTitle.protoType = {
    title: PropTypes.string,
    children:PropTypes.node,
}
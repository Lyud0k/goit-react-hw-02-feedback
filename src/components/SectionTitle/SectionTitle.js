import css from 'components/SectionTitle/SectionTitle.module.css';

export const SectionTitle = ({title, children}) => {
    return (
        <div>
            
            <h2 className={css.text}>{title}</h2>{children}
</div>
    )
}
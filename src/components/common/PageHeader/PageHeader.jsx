import './PageHeader.css';
const PageHeader = ({ title, subTitle, icon }) => {
    return (
        <h1 className="page-header">
            <i className={icon}></i> {title} <small>{subTitle}</small>
        </h1>
    );
};

export default PageHeader;

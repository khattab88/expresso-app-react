function AppDownloadButton(props) {
    return (
        <a href={props.href} className="app-download__btn">
            <img alt={props.title} className="app-download__img" src={props.img} />
        </a>
    );
}

export default AppDownloadButton;
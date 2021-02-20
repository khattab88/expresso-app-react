function SocialLink(props) {
    const iconClass = `social-link__icon fa ${props.icon}`;

    return(
        <li className="social-navigation__item">
            <a href={props.href} className="social-link">
                <i className={iconClass}></i>
            </a>
        </li>
    );
}

export default SocialLink;
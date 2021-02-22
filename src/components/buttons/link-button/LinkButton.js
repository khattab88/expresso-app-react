function LinkButton(props) {
    return(
        <a className={props.className} href={props.href}>{props.title}</a>
    );
}

export default LinkButton;
function CommonButton({ link, cls, text }) {
    return (
        <a className={cls} href={link}>{text}</a>
    )
}


export default CommonButton
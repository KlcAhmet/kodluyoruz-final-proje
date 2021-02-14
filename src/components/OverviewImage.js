function OverviewImage({ src, cls }) {
    return (
        <img className={`img-fluid ${cls}`} src={src} alt="Image" />
    )
}

export default OverviewImage
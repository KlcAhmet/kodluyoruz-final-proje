function OverviewImage(imagesrc) {
    return (
        <img src={Object.values(imagesrc)[0]} alt="Image" />
    )
}

export default OverviewImage
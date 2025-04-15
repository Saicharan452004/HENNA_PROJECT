import "./index.css"

const GalleryItem=(props)=>{
    const {imageDetails}=props
    return(
        <li className="gallery-list-item">
            <img src={imageDetails} className="gallery-list-item-image" alt="design"/>
        </li>     
    )
}
export default GalleryItem
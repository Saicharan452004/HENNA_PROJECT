import Header1 from "../Header1"
import Header2 from "../Header2"
import GalleryItem from "../GalleryItem"
import Footer from "../Footer"
import bridal1 from "../../assets/bridal1.png"
import bridal2 from "../../assets/bridal2.png"
import bridal3 from "../../assets/bridal3.png"
import bridal4 from "../../assets/bridal4.png"
import arabic1 from "../../assets/arabic1.png"
import arabic2 from "../../assets/arabic2.png"
import arabic3 from "../../assets/arabic3.png"
import arabic4 from "../../assets/arabic4.png"
import rajasthani1 from "../../assets/rajasthani1.png"
import rajasthani2 from "../../assets/rajasthani2.png"
import rajasthani3 from "../../assets/rajasthani3.png"
import rajasthani4 from "../../assets/rajasthani4.png"
import western1 from "../../assets/western1.png"
import western2 from "../../assets/western2.png"
import western3 from "../../assets/western3.png"
import western4 from "../../assets/western4.png"

import "./index.css"

const bridalItems=[
    {
        image:bridal1
    },
    {
        image:bridal2
    },
    {
        image:bridal3
    },
    {
        image:bridal4
    }
]

const arabicItems=[
    {
        image:arabic1
    },
    {
        image:arabic2
    },
    {
        image:arabic3
    },
    {
        image:arabic4
    }
]

const rajasthaniItems=[
    {
        image:rajasthani1
    },
    {
        image:rajasthani2
    },
    {
        image:rajasthani3
    },
    {
        image:rajasthani4
    }
]

const westernItems=[
    {
        image:western1
    },
    {
        image:western2
    },
    {
        image:western3
    },
    {
        image:western4
    }
]

const Gallery=(props)=>{
    return(
        <div className="home-container">
            <Header1/>
            <Header2/>
            <div className="gallery-heading-section">
                <h1 className="gallery-heading">Latest From Gallery</h1>
                <p className="gallery-paragraph">Journey through the highlights of our story</p>
            </div>
            <div className="gallery-section">
                <h1 className="gallery-sub-heading">Bridal Mehendi</h1>
                <ul className="gallery-list">
                    {bridalItems.map(eachItem=>(
                        <GalleryItem key={eachItem.id} imageDetails={eachItem.image}/>
                    ))}
                </ul>
                <h1 className="gallery-sub-heading">Arabic Mehendi</h1>
                <ul className="gallery-list">
                    {arabicItems.map(eachItem=>(
                        <GalleryItem key={eachItem.id} imageDetails={eachItem.image}/>
                    ))}
                </ul>
                <h1 className="gallery-sub-heading">Rajasthani Mehendi</h1>
                <ul className="gallery-list">
                    {rajasthaniItems.map(eachItem=>(
                        <GalleryItem key={eachItem.id} imageDetails={eachItem.image}/>
                    ))}
                </ul>
                <h1 className="gallery-sub-heading">Western Mehendi</h1>
                <ul className="gallery-list">
                    {westernItems.map(eachItem=>(
                        <GalleryItem key={eachItem.id} imageDetails={eachItem.image}/>
                    ))}
                </ul>
            </div>
            <Footer/>
        </div>
    )
}
export default Gallery
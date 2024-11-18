// Modules
import { useState } from "react";
import ReactModal from "react-modal";

function ProjectSheet({ data }) {
    const [selectedImage, setSelectedImage] = useState(data.images[0]);
    const [isModalOpen, setModalOpen] = useState(false)

    function handleClick() {
        if (data.url) { window.location.replace(data.url); return }
        alert("Aucun lien pour ce projet.")
    }

    return (
        <div className="projectSheet">
            <div className="PS-images">
                <img src={selectedImage.imageURL} alt={selectedImage.alt} className="PS-selectedImage" onClick={() => setModalOpen(true)}/>

                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                     <img src={selectedImage.imageURL} alt={selectedImage.alt} />
                </ReactModal >
                <div className="PS-images-selection">
                    {data.images.map(element => (
                        <div>
                            <img src={element.imageURL} alt={element.alt} onClick={() => setSelectedImage(element)}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="PS-details">
                <div className="PS-header">
                    <h1>{data.title}</h1>
                    <h2>{data.subTitle}</h2>
                </div>

                <button onClick={handleClick}>Voir le projet</button>

                <div className="PS-descriptions">
                    {data.descriptions.map(element => (
                        <p>{element}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectSheet;
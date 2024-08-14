


function FeaturesItem ({icon, title="", paragraph=""}){
    return <div className="feature-item">
                <img className='feature-icon' src={icon} alt="Chat Icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p> {paragraph}</p>
            </div>
}

export default FeaturesItem;
import './Card.css';

export default function Card(props) {  
    const title = props.title; 
    const description = props.description;  
    const imageUrl = props.imageUrl;  
    const children = props.children;

    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            {title && <h2 className="card-title">{title}</h2>}
            {description && <p className="card-description">{description}</p>}
            {children}
        </div> 
    );
}
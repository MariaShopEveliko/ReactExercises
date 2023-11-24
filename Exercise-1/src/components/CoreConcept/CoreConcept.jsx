import './CoreConcept.css'

export default function CoreConcept({ title, description, image }) { //here {} are destructuring the first object - props (so we can skip props. )
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }
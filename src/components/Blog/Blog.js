import './blog.css'
export const Blog=(props)=>{

    return <div className="card mb-3" >
    <img className="card-img-top" src={props.image} alt="Card image cap"/>
    <div className="card-body bg-dark text-white">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <p className="card-text"><small class="text-muted">{props.author}</small></p>
      <p className="card-text"> <a href={props.url}>Show More</a></p>
    </div>
    </div>
}
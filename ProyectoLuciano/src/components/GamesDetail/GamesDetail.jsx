
export const GamesDetail = ({name, img, details, category}) => {
  return (
    

<div className="card" style={{ width: '18rem' }}>
    
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text"> {category} </h5>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {details}
        </p>
        <a href="#" className="btn btn-primary">
          Home
        </a>
      </div>
    </div>



  )
}

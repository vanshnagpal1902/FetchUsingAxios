
function Cards({payload})
{
  
    return (
        <>
    <div className="card shadow m-3" style={{width:"18rem"}}>
    <img src={payload.thumbnail} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{payload.title}</h5>
    <p className="card-text">{payload.description}</p>
    <a href="#" className="btn btn-primary" >add to cart</a>
    <button className="btn btn-warning">see details</button>
    </div>
    </div>

        </>
    );
}
export default Cards;
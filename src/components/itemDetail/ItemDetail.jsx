import React from 'react'




const ItemDetail = ({series}) => {


  return (
    <div>
      
         {series.length > 0 ? series.map((serie,index)=>(
            
            
            <div class="jumbotron container" style ={{margin:"50px auto"}} >
              <div className='row p-0 m-0'>
                <div className='col-12 col-md-8 p-0 m-0' >
                     <img style ={{width:"100%",height:"100%"}} src={serie.imagen} alt="" />
                </div>
                <div className='col-12 col-md-4'>
                     <h3 className='pt-3'>{serie.titulo}</h3>
                     <h4>{serie.temporadas}</h4>
                     <p>{serie.sinopsis}</p>
                     <button type="button" class="btn btn-success">{serie.precio}</button>
                </div>
              </div>
          
            
            </div>
            
        )):
            <h1>cargando<i className="fa-solid fa-spinner"></i></h1>
        }
    </div>
  )
}

export default ItemDetail
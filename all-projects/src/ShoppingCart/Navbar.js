import React from "react";

const Navbar=(props)=>{
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav ">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Cart({props.cart.length})
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            
            {props.cart.map(item=><li>{item['product-name']}({item.quantity})</li>)}
          </ul>
        </li>
        

      </ul>
  
  </div>
  </div>
  </nav>
      
    )
}
export default Navbar;


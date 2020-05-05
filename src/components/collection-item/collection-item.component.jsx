import React from 'react';
import { connect } from 'react-redux';
import Modal from '../modal/modal'
import { addItemToCart } from '../../redux/cart/cart.actions';
import { setCurrentPath } from '../../redux/user/user.actions'
// import { reItem } from '../../redux/cart/cart.actions'
import { getPathLoc } from '../../redux/user/user.selectors'
// import { getItems } from '../../redux/cart/cart.selectors'

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles';
import './fontawesome.css'

const CollectionItem = ({ item, dispatch, ites }) => {
  const { imageUrl, name, price, description, image2Url } = item;
  
  return (
    <div>
    <CollectionItemContainer>
    
    <BackgroundImage className='background-image' imageUrl={imageUrl} />

      
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton className="add-button"
       
      
        onClick={() => dispatch(addItemToCart(item))}
        
      >
        ADD TO CART
        
      
      </AddButton>
      <AddButton className="add-button"
       
       data-toggle="modal" data-target="#modalQuickView"
        
        onClick={() => dispatch(setCurrentPath(`${name} ${price} ${imageUrl} ${image2Url} ${description}`))}
      >
        QUICK VIEW
        
      
      </AddButton>
      
      {/* <button type="button" class="btn btn-primary" onClick={() => setCurrentPath(`${name} ${price} ${imageUrl} ${description}`)}  data-toggle="modal" data-target="#modalQuickView">Quick View</button> */}

    <Modal item={item} />
      </CollectionItemContainer>
      </div>
  );
};

const mapStateToProps = state => ({
  path: getPathLoc(state)
  
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentPath: path => dispatch(setCurrentPath(path))
// });

export default connect(mapStateToProps)(CollectionItem);

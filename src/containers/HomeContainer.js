
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'
import CompactCard from '../Card/CompactCard'





const mapStateToProps=state=>({
     data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(CompactCard)
// export default Home;
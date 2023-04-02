
import {connect} from 'react-redux'
import Searchbar from '../Header/Searchbar'
import {addToCart} from '../service/actions/actions'
const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Searchbar)
// export default Home;
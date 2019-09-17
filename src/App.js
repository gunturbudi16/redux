import React, {Component} from 'react';
import { connect } from 'react-redux'
import buatDonatAction from './actions/buatDonatAction';

import './App.css';
//import store from './store';
class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       tepung:0,
//       coklat:0,
//       cherry:0,
//     };
//   }
//   componentDidMount(){
//     //meload data / state dari redux ke state di react
//     const bahan = store.getState().bahan;
//     this.setState({
//       tepung:bahan.tepung,
//       coklat:bahan.coklat,
//       cherry:bahan.cherry,
//     })
  
//   store.subscribe(()=>{
//     const bahan = store.getState().bahan;
//     this.setState({
//         tepung:bahan.tepung,
//         coklat:bahan.coklat,
//         cherry:bahan.cherry,
//     });
//   });
// }
//   handleBuatDonat=()=>{
//     console.log("Buat Donat");
//     store.dispatch(buatDonatAction);
//     }
  render(){
    // console.log(store.getState());//menampilkan isi dari store
    console.log(this.props);
    
    return(
      <div className="App">
        <header className="App-header">
          <span className="logo" role="img" aria-label="bread">🍞🍞🍞</span>
          <h1 className="App-title">Dapur Toko Roti</h1>
        </header>
        <div className="ready-wrapper">
          <span>
            <strong>0</strong>
            <span className="icon" role="img" aria-label="donut">🥯Donut</span>
            <strong>0</strong>
            <span className="icon" role="img" aria-label="cake">🥞CAKE</span>
          </span>
        </div>
        <div className="item-wrapper">
          <div className="item">
             <strong>Tepung</strong>{this.props.bahan.tepung}
          </div>
          <div className="item">
             <strong>Coklat</strong>{this.props.bahan.coklat}
          </div>
          <div className="item">
             <strong>Cherry</strong>{this.props.bahan.cherry}
          </div>
        </div>
        <div className="action-wrapper">
          <button className="btn" onClick={this.props.buatDonat}>
            <span className="icon" role="img" aria-label="donut">🥯</span>
            <span>Buat 1 Donat Coklat</span>
          </button>
          <button className="btn">
            <span className="icon" role="img" aria-label="cake">🥞</span>
            <span>Buat 1 Cake Coklat</span>
          </button>
          <button className="btn">
            <span className="icon" role="img" aria-label="cart">🛒</span>
            <span>Isi Ulang Bahan</span>
          </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  //console.log(state.bahan);
  return{
    bahan:state.bahan,
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    buatDonat:()=>dispatch(buatDonatAction)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
import loading from '../loading.gif'
 const Loader=()=>{

    return (
      <div className='text-center'>
        <img src={loading} className='mx-3' alt="" style={{height:'50px',width:'50px'}}/>
      </div>
    )
  
}
export default Loader;
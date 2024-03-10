import './rightbar.scss'

const RightBar =() =>{
    return (
        <div className='RightBar'>
        <div className='container'>
            <div className='item'>
                <span>Suggested for you</span>
    
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <span>Aung Khant Zin</span>
                    </div>
                    <div className="buttons">
                        <button>follow</button>
                        <button>dismiss</button>
                    </div>
                </div>
              
        
            
            </div>
            <div className="item">
             <span>Latest Activites</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      <p>
                        <span>Kaung Kaung</span> changed their pictuer
                      </p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="item">
                <span>Online Friends</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                       <div className='online'/>
                       <span>John Doe</span>
                    </div>
                    
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                       <div className='online'/>
                       <span>John Doe</span>
                    </div>
                    
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                       <div className='online'/>
                       <span>John Doe</span>
                    </div>
                    
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                       <div className='online'/>
                       <span>John Doe</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default RightBar
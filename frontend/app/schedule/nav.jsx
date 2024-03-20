"use client"
import "./nav.css";


const Nav = ({date,setDate}) => {
  console.log(date,'date')
    return (
        <div className="nav-div ">
            <div className="container flex flex-row justify-between" style={{height:'5em'}}>
                <div className="flex flex-row items-center nav-in-div">
                    <img src="https://img.freepik.com/free-vector/abstract-logo-gradient-color-style_23-2147507866.jpg?w=740&t=st=1710864530~exp=1710865130~hmac=036b214d7e8461b2be880391376ce89d6a7034f394cf3b4fc53fe315d410dd99" alt="" className="logo" />
                    <h2 style={{ fontSize: '24px', color:'white' }}>Scheduler App</h2>
                </div>
                <div className="flex items-center">
                    
                </div>
            </div>
        </div>
    )
}

export default Nav
import React from 'react'
import '../home/home.scss'
// import AddComment from '@mui/icons-material/AddComment';
// import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured'
import List from '../components/list/List'


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <img
                src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                height= "80%"
                width= "100%"
                alt="big" />
            <h1 className="title">Welcome Home</h1>
            <div className="welcome">
                <h2 className="greeting">Hello there!</h2>
                <div className="info">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni mollitia obcaecati est incidunt tenetur tempore tempora iusto quod suscipit nam aliquam nobis dolor aliquid, adipisci corporis repellendus id doloribus!
                    
                </p>
                <p>
                    Sed, possimus quae nisi libero ut magnam quisquam incidunt fugit dolorum temporibus eius earum aliquid ullam eligendi tempora nulla obcaecati! Mollitia, necessitatibus?
                    Ad, hic autem voluptate, quisquam architecto eligendi aliquam impedit dicta optio repudiandae exercitationem non officiis voluptatibus earum voluptates culpa nesciunt
                </p>

                </div> 
            </div>
            
            {/* <MovieFilterIcon/> */}
            <List />
            <span></span>
            <Featured />
           {/* <AddComment/> */}
        </div>
    )
}

export default Home

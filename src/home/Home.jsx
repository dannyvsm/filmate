import React from 'react'
import '../home/home.scss'
// import AddComment from '@mui/icons-material/AddComment';
// import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured'


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
            <h2>Hello there!</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni mollitia obcaecati est incidunt tenetur tempore tempora iusto quod suscipit nam aliquam nobis dolor aliquid, adipisci corporis repellendus id doloribus!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corrupti molestias voluptatibus! Exercitationem enim molestias laboriosam qui nihil, quis vitae doloremque obcaecati laudantium neque numquam dignissimos repellat ratione placeat dolorum. 
            </p>
            <p>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos dolorum suscipit pariatur vero quam, quidem officia ratione voluptatem sed voluptas eos.Enim dolor provident voluptates voluptas numquam ipsa explicabo, possimus sint aliquid harum asperiores assumenda delectus omnis mollitia blanditiis!
                
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, possimus quae nisi libero ut magnam quisquam incidunt fugit dolorum temporibus eius earum aliquid ullam eligendi tempora nulla obcaecati! Mollitia, necessitatibus?
                Ad, hic autem voluptate, quisquam architecto eligendi aliquam impedit dicta optio repudiandae exercitationem non officiis voluptatibus earum voluptates culpa nesciunt
            </p>
            
            
            {/* <MovieFilterIcon/> */}
            <Featured />
           {/* <AddComment/> */}
            </div>
        )
}

export default Home

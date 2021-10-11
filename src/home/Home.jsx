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
            {/* <MovieFilterIcon/> */}
            <Featured />
           {/* <AddComment/> */}
            </div>
        )
}

export default Home

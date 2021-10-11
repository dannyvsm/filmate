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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni mollitia obcaecati est incidunt tenetur tempore tempora iusto quod suscipit nam aliquam nobis dolor aliquid, adipisci corporis repellendus id doloribus!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corrupti molestias voluptatibus! Exercitationem enim molestias laboriosam qui nihil, quis vitae doloremque obcaecati laudantium neque numquam dignissimos repellat ratione placeat dolorum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos dolorum suscipit pariatur vero quam, quidem officia ratione voluptatem sed voluptas eos quasi, quibusdam, eius aut expedita possimus hic id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est repellendus quia. Enim dolor provident voluptates voluptas numquam ipsa explicabo, possimus sint aliquid harum asperiores assumenda delectus omnis mollitia blanditiis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quo dolor nihil tempore vitae odit minima dolores nobis repudiandae eos perspiciatis repellendus quia labore rerum harum beatae, incidunt laudantium pariatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, possimus quae nisi libero ut magnam quisquam incidunt fugit dolorum temporibus eius earum aliquid ullam eligendi tempora nulla obcaecati! Mollitia, necessitatibus?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti obcaecati illo, cum quia ex animi quas perferendis incidunt eveniet labore, mollitia necessitatibus ad officia ipsa? Quo debitis voluptate commodi accusamus? Ad, hic autem voluptate, quisquam architecto eligendi aliquam impedit dicta optio repudiandae exercitationem non officiis voluptatibus earum voluptates culpa nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            
            Beatae modi ab iste mollitia molestias aperiam doloribus ipsam, natus earum delectus ducimus harum quod! Saepe atque facere autem ratione maxime magnam rerum nisi alias. Dolores expedita at ullam necessitatibus ut. Pariatur odit ipsa consectetur totam, mollitia ratione expedita minus impedit? Error obcaecati aliquid aperiam perspiciatis consectetur quaerat dolore autem ipsa, enim, amet repudiandae, quos placeat consequatur ipsam explicabo. Laborum mollitia, nisi ad amet itaque veritatis labore rem quia earum similique, ullam sunt eius fuga consectetur officiis aut vero voluptatibus temporibus illum illo necessitatibus vitae at recusandae qui. Porro veritatis explicabo saepe.
            {/* <MovieFilterIcon/> */}
            <Featured />
           {/* <AddComment/> */}
            </div>
        )
}

export default Home

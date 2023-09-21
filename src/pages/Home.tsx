import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="home hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">GalleryPro📸</h1>
            <p className="mb-5">Leave that bulky photo album at home and 
                use your phone or tablet instead to relive all those precious 
                memories. With GalleryPro📸, you can upload, view and manage 
                your pictures, and other users' pictures right on your device.</p>
            <Link to="/login" className="link"><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
        

        <footer className="footer">
          <div className="condition">
            <a href="/">Conditions of use</a>
            <a href="/">Privacy &amp; Policy</a>
            <a href="/">Press Room</a>
          </div>
          <h4> &#169; 2023 Gallerypro📸 by Olaoluwa Emmanuel</h4>
        </footer>
    </div>
  )
}

export default Home
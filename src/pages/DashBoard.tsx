import UploadForm from '../components/UploadForm'
import ImageGallery from '../components/ImageGallery'
import Navbar from '../components/Navbar'

const DashBoard = () => {


  return (
    <div className='max-w-4xl mx-auto'>
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  )
}

export default DashBoard
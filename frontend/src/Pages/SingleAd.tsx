// Hooks
import { useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import useAds from '../Hooks/useAds'
// Components
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
import Spinner from '../Components/Spinner'
import BrowseJobs from '../Components/BrowseJobs'
// Libraries
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../utils/toastNotification'
// Images
import thinkingGirl from '../assets/images/SingleAd_girl.png'
// Framer-motion
import { motion } from 'framer-motion'
import { IoMdHeadset } from 'react-icons/io'

const SingleAd = () => {

  // CONSTANTS
  const user = useUser()
  const ads = useAds()
  const navigate = useNavigate()

 // HANDLE CLICK
  const handleClick = () => {
    if (user.isLoggedIn === false) navigate('/auth-required')
    // navigate('/contact')
  }



  return (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      area-label='page-singleAd'
      className='pt-[120px]  pb-10 w-[95%] h-full  min-h-[900px] flex flex-col items-center justify-center text-textBlack '
    >
      {/* <div
        area-label='wrapper'
        className='w-full h-full flex justify-center items-center flex-col  '
      > */}
        {/* MAIN PART OF SINGLE AD */}

        <div
          area-label='main'
          className='w-[95%] sm:max-w-[900px]  h-full flex flex-col justify-start sm:w-[80%] md:w-[70%]  lg:w-[50%] xl:w-[800px] md:min-h-[650px]  xl:min-h-full 
        '
        >
          

          <BrowseJobs style={{paddingLeft:'10px', paddingBottom:'20px', alignSelf:'start'}}/>
     
       

          {/* Ad */}
          <div
            area-label='ad'
            className='py-5  mt-0 mx-2 w-full min-h-[400px] sm:h-[400px] 
            sm:w-[600px] xl:w-[800px]
            flex flex-col  justify-start item-center self-center z-10 rounded-[21px] bg-white shadow-standard 
            sm:mx-0 sm:p-5
            '
          >  
          
           
            <AdMobile />
          
          {!ads.isLoading && 
            <div area-label='description' className='mt-3 px-3 sm:max-h-[230px] sm:overflow-y-scroll'>
              <h3 className='text-[20px]'>Description</h3>
              <p className='text-[14px] text-justify mt-2 text-gray/80'>{ads.ad?.description}</p>
            </div>
          }
          </div> 
         

          {/* ContactDetails MOBILE - If user exists, show ContactDetails */}
          <div className='flex justify-center '>
            {user.user && (
              <ContactDetails
                className=' w-[80%] max-w-[340px] pt-10 
              sm:w-[80%]
              lg:w-[800px]
              flex justify-center self-center rounded-xl xl:hidden'
              />
            )}
          </div>

          {/* DO NOT show button if ad belongs to the user  */}
          {user.user?.name === ads.ad?.user.name ? (
            ''
          ) : (
            <UniButton
              text='Contact'
              onClick={handleClick}
              className='my-7 self-center mb-2 lg:mb-0'
            />
          )}
        </div> 
        {/* Ad - END */}
      {/* </div> */}
   
      {/* Main part of single ad - END */}

      {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster */}

      {/* Circle and line in the background */}
      <div
        area-label='circle'
        className='hidden 
        w-[332px] h-[332px] absolute lg:top-[470px] lg:left-[-230px] lg:translate-y-[-50%]  lg:rounded-full  lg:bg-lightGreen
        xl:block'
      />

      <div
        area-label='line'
        className='hidden xl:block lg:absolute lg:top-[475px] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
      />
      {/* Circle and line in the background - END */}

      {/* ContactDetails DESKTOP - If user exists, show ContactDetails */}
      {user.user && (
        <ContactDetails
          className='hidden xl:block
        w-[250px] m-8 absolute lg:items-center  -right-14 top-[435px] rounded-l-[65px] translate-y-[-50%] 
        xl:min-w-[230px]'
        />
      )}
      {/* ContactDetails - END */}

      {/* image */}
      <img
        src={thinkingGirl}
        alt='illustration of girl in front of laptop'
        className='hidden xl:w-[200px] xl:h-[190px] xl:absolute xl:bottom-[10px] xl:left-[14%] xl:block lg:z-30'
      />
      {/* image - END */}

      <ToastContainer position='bottom-right' />

      {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster - END */}
      {/* test */}
    </motion.div>
  )
}

export default SingleAd

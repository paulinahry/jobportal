// Animation
import { motion } from 'framer-motion'
import { ReactNode } from 'react'


type Props = {
  text: string | ReactNode
  style?: {}
  type?: string
  fontSize?: string
  width?: string
  height?: string
  className?: string
  onClick?: () => void
}

const UniButton = ( props: Props ) => {

  return (
    <div className={ props.className }>
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={props.onClick}
        className='w-[190px] font-medium flex items-center justify-center rounded-full bg-lightGreen border-lightGreen hover:border-darkGreen2 border-[2.5px] shadow-inner text-white hover:bg-darkGreen2 ease-in-out duration-300 px-[24px] py-[12px] md:w-[250px]'
        style={props.style}
      >
        {props.text}
      </motion.button>
    </div>
  )
}

export default UniButton

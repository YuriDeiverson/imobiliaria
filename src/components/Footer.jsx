import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
       <div className="text-center sm:flex items-center justify-between border-t border-w-400 mx-[10%] mt-12 py-6 text-white">
        <p> Yuri.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/YuriDeiverson" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yuri-deiverson/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
  const links = [
    { label: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/saad._.mohamad?igsh=bHVldHN0MGYxa3Rn' },
    { label: 'Twitter', icon: <FaTwitter />, href: 'https://x.com/MohammedSa3482' },
    { label: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/mohammed-saad-122004368' },
    { label: 'GitHub', icon: <FaGithub />, href: 'https://github.com/Saad63600' }
  ]

  return (
    <div className='flex mt-[100px] h-fit font-bold text-2xl px-5 py-3 justify-around'>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 h-fit w-fit hover:bg-amber-200 hover:text-red-900 px-3 py-1 rounded-4xl cursor-pointer'
        >
          <span className='text-3xl'>{link.icon}</span>
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks

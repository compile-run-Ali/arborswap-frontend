import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sitemap } from '../data/sitemap'

const useActiveItem = (pathname) => {
  const [activeItem, setActiveItem] = useState(null)
  const location = useLocation()

  useEffect(() => {
    sitemap.map((navItem) => {
      if (location.pathname.includes(navItem.link)) setActiveItem(navItem.name)
      else if (navItem.sublinks.includes(location.pathname)) setActiveItem(navItem.name)
      return [activeItem, setActiveItem]
    })
  })

  return [activeItem, setActiveItem]
}

export { useActiveItem }

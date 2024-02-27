import React, { useContext } from 'react'
import { WebsiteContext } from '../App'

export default function FooterItem() {
  const { websiteName } = useContext(WebsiteContext)
  return <div>FooterItem - {websiteName}</div>
}

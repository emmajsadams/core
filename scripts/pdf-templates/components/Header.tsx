import { Link, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from '../styles'

interface HeaderProps {
  name: string
  title: string
  email: string
  phone: string
  socialLinks: Array<{
    name: string
    url: string
  }>
}

export const Header: React.FC<HeaderProps> = ({ name, title, email, phone, socialLinks }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.contactInfo}>
        <Text style={styles.contactItem}>{email}</Text>
        <Text style={styles.contactItem}>{phone}</Text>
        {socialLinks
          .filter((link) => !link.url.includes('twitter.com'))
          .map((link, index) => (
            <Link key={index} src={link.url} style={styles.socialLink}>
              {link.url.replace('https://', '')}
            </Link>
          ))}
      </View>
    </View>
  )
}

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

export const Header: React.FC<HeaderProps> = ({ name, _title, email, phone, socialLinks }) => {
  // Filter to get GitHub and LinkedIn links
  const github = socialLinks.find((link) => link.url.includes('github.com'))
  const linkedin = socialLinks.find((link) => link.url.includes('linkedin.com'))

  return (
    <View style={styles.header}>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.contactInfo}>
        <Text style={styles.contactItem}>Remote · Seattle, WA</Text>
        <Text style={styles.contactItem}>•</Text>
        <Text style={styles.contactItem}>{email}</Text>
        <Text style={styles.contactItem}>•</Text>
        <Text style={styles.contactItem}>{phone}</Text>
        <Text style={styles.contactItem}>•</Text>
        {github && (
          <>
            <Link src={github.url} style={styles.socialLink}>
              {github.url.replace('https://', '')}
            </Link>
            <Text style={styles.contactItem}>•</Text>
          </>
        )}
        {linkedin && (
          <Link src={linkedin.url} style={styles.socialLink}>
            {linkedin.url.replace('https://', '')}
          </Link>
        )}
      </View>
    </View>
  )
}

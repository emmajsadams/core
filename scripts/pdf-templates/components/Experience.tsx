import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { styles } from '../styles'

interface ExperienceItem {
  title: string
  institution: string
  location: string
  start: string
  end: string
  description: string[]
}

interface ExperienceProps {
  experiences: ExperienceItem[]
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>
      
      {experiences.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <View style={styles.jobHeader}>
            <View>
              <Text style={styles.jobTitle}>{exp.title}</Text>
              <Text style={styles.company}>{exp.institution}</Text>
              <Text style={styles.location}>{exp.location}</Text>
            </View>
            <Text style={styles.dateRange}>{exp.start} - {exp.end}</Text>
          </View>
          
          <View style={styles.descriptionList}>
            {exp.description.map((desc, i) => (
              <View key={i} style={styles.row}>
                <View style={styles.bullet} />
                <Text style={styles.descriptionItem}>{desc}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}
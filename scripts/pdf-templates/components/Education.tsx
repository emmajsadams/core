import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from '../styles'

interface EducationItem {
  institution: string
  degree: string
  location: string
  gpa: number
  startYear: number
  endYear: number
  description: string[]
}

interface EducationProps {
  education: EducationItem[]
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>EDUCATION</Text>

      {education.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <Text style={styles.degree}>{edu.degree}</Text>
          <Text style={styles.school}>{edu.institution}</Text>

          <View style={styles.educationDetails}>
            <Text style={styles.gpa}>GPA: {edu.gpa}</Text>
            <Text style={styles.graduationYear}>
              {edu.startYear} - {edu.endYear}
            </Text>
          </View>

          {edu.description.length > 0 && (
            <View style={styles.descriptionList}>
              {edu.description.map((desc, i) => (
                <View key={i} style={styles.row}>
                  <View style={styles.bullet} />
                  <Text style={styles.descriptionItem}>{desc}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  )
}

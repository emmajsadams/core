import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from '../styles'

interface SkillCategory {
  category: string
  skills: string[]
}

interface SkillsProps {
  skills: SkillCategory[]
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>

      {skills.map((skillCategory, index) => (
        <View key={index} style={styles.skillRow}>
          <Text style={styles.skillCategoryLabel}>{skillCategory.category}:</Text>
          <Text style={styles.skillsText}>{skillCategory.skills.join(', ')}</Text>
        </View>
      ))}
    </View>
  )
}

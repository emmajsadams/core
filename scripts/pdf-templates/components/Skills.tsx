import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import { styles } from '../styles'

interface SkillCategory {
  category: string
  technologies: string[]
}

interface SkillsProps {
  skills: SkillCategory[]
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
      
      <View style={styles.skillsGrid}>
        {skills.map((skillCategory, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>{skillCategory.category}</Text>
            <View style={styles.skillsList}>
              {skillCategory.technologies.map((skill, i) => (
                <Text key={i} style={styles.skillItem}>{skill}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
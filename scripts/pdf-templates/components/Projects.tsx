import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from '../styles'

interface ProjectItem {
  title: string
  technologies: string[]
  description: string[]
}

interface ProjectsProps {
  projects: ProjectItem[]
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>PROJECTS</Text>

      {projects.map((project, index) => (
        <View key={index} style={styles.projectItem}>
          <Text style={styles.projectTitle}>{project.title}</Text>

          {project.description.map((desc, i) => (
            <View key={i} style={styles.row}>
              <View style={styles.bullet} />
              <Text style={styles.projectDescription}>{desc}</Text>
            </View>
          ))}

          <View style={styles.technologies}>
            {project.technologies.map((tech, i) => (
              <Text key={i} style={styles.techTag}>
                {tech}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 65,
    lineHeight: 1.4,
  },
  
  // Header styles
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1f2937',
  },
  title: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 5,
  },
  contactItem: {
    fontSize: 9,
    color: '#6b7280',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 5,
  },
  socialLink: {
    fontSize: 9,
    color: '#2563eb',
    textDecoration: 'none',
  },

  // Section styles
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 3,
  },

  // Experience styles
  experienceItem: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  company: {
    fontSize: 10,
    color: '#2563eb',
    marginBottom: 1,
  },
  location: {
    fontSize: 9,
    color: '#6b7280',
  },
  dateRange: {
    fontSize: 9,
    color: '#6b7280',
    textAlign: 'right',
  },
  descriptionList: {
    marginTop: 3,
    marginLeft: 10,
  },
  descriptionItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2,
    lineHeight: 1.3,
  },

  // Education styles
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  school: {
    fontSize: 10,
    color: '#2563eb',
  },
  educationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  gpa: {
    fontSize: 9,
    color: '#6b7280',
  },
  graduationYear: {
    fontSize: 9,
    color: '#6b7280',
  },

  // Projects styles
  projectItem: {
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 3,
    lineHeight: 1.3,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 3,
  },
  techTag: {
    fontSize: 8,
    color: '#374151',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },

  // Skills styles
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  skillCategory: {
    width: '48%',
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  skillItem: {
    fontSize: 8,
    color: '#374151',
    backgroundColor: '#f9fafb',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 2,
    marginBottom: 2,
  },

  // Utility styles
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCenter: {
    textAlign: 'center',
  },
  bullet: {
    width: 4,
    height: 4,
    backgroundColor: '#6b7280',
    borderRadius: 2,
    marginTop: 4,
    marginRight: 6,
  }
})
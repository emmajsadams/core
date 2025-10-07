import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    lineHeight: 1.2,
  },

  // Header styles
  header: {
    marginBottom: 8,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1f2937',
  },
  title: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  contactItem: {
    fontSize: 8,
    color: '#6b7280',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 3,
  },
  socialLink: {
    fontSize: 8,
    color: '#2563eb',
    textDecoration: 'none',
  },

  // Section styles
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 2,
  },

  // Experience styles
  experienceItem: {
    marginBottom: 8,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  company: {
    fontSize: 9,
    color: '#2563eb',
    marginBottom: 1,
  },
  location: {
    fontSize: 8,
    color: '#6b7280',
  },
  dateRange: {
    fontSize: 8,
    color: '#6b7280',
    textAlign: 'right',
  },
  descriptionList: {
    marginTop: 2,
    marginLeft: 8,
  },
  descriptionItem: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 1,
    lineHeight: 1.2,
  },

  // Education styles
  educationItem: {
    marginBottom: 6,
  },
  degree: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  school: {
    fontSize: 9,
    color: '#2563eb',
  },
  educationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  gpa: {
    fontSize: 8,
    color: '#6b7280',
  },
  graduationYear: {
    fontSize: 8,
    color: '#6b7280',
  },

  // Projects styles
  projectItem: {
    marginBottom: 6,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 1,
  },
  projectDescription: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 2,
    lineHeight: 1.2,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    marginTop: 2,
  },
  techTag: {
    fontSize: 7,
    color: '#374151',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
  },

  // Skills styles
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillCategory: {
    width: '48%',
    marginBottom: 5,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },
  skillItem: {
    fontSize: 7,
    color: '#374151',
    backgroundColor: '#f9fafb',
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
    marginBottom: 1,
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
  },
})

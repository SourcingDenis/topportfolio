import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  PDFViewer,
  PDFDownloadLink 
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    padding: '3 8',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  }
});

const skills = [
  "React", "TypeScript", "Node.js", "Python", "SQL", "AWS"
];

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>John Doe</Text>
        <Text style={styles.text}>Full-Stack Developer</Text>
        <Text style={styles.text}>contact@johndoe.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Summary</Text>
        <Text style={styles.text}>
          Passionate full-stack developer with 5+ years of experience building web applications.
          Specialized in React, Node.js, and modern web technologies.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill) => (
            <Text key={skill} style={[styles.text, styles.skill]}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Experience</Text>
        <Text style={styles.text}>Senior Full-Stack Developer - TechCorp</Text>
        <Text style={styles.text}>2020 - Present</Text>
        <Text style={styles.text}>
          • Led development of multiple full-stack applications
          • Implemented scalable solutions using React and Node.js
          • Mentored junior developers and conducted code reviews
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Education</Text>
        <Text style={styles.text}>BS in Computer Science</Text>
        <Text style={styles.text}>University of Technology - 2019</Text>
      </View>
    </Page>
  </Document>
);

export function DownloadResume() {
  return (
    <PDFDownloadLink document={<ResumePDF />} fileName="john-doe-resume.pdf">
      {({ loading }) => (loading ? 'Loading...' : 'Download Resume')}
    </PDFDownloadLink>
  );
}

export function ResumeViewer() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <ResumePDF />
    </PDFViewer>
  );
}

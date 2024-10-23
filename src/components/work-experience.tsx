import { MainSection, Heading2, Paragraph, List, ListItem } from './style';

export default function WorkExperience() {
  return (
    <MainSection>
      <Heading2>Internship: Software Engineering</Heading2>
      <Paragraph>
        <strong>Backend Developer, Frontend Developer</strong> July 2024 to Aug. 2024, San Francisco, CA (Remote)
      </Paragraph>
      <List>
        <ListItem>
          Engineered a comprehensive insurance platform using Spring Boot (backend) and Angular (frontend), implementing RESTful APIs for claims processing, policy management, and compliance checks.
        </ListItem>
        <ListItem>
          Designed and developed a responsive UI for seamless policy and claims management.
        </ListItem>
      </List>

      <Heading2>Student Tutor</Heading2>
      <Paragraph>
        <strong>Work Study Job</strong> Oct. 2023 to Present, Boston, MA
      </Paragraph>
      <List>
        <ListItem>
          Tutored computer science, math, and economics at the student-athletes tutoring center.
        </ListItem>
      </List>

      <Heading2>Hackathon Experience</Heading2>
      <Paragraph>
        <strong>Boston Hacks 2023</strong> Nov. 2023, Boston, MA
      </Paragraph>
      <List>
        <ListItem>
          Demonstrated skills in web development, teamwork, communication, and creativity by developing a prototype solution in a 24-hour coding challenge.
        </ListItem>
      </List>
    </MainSection>
  );
}

import { MainSection, Heading2, List, ListItem } from './style';  // Import the styled components

export default function Skill() {
  return (
    <MainSection>
      <Heading2>Programming Languages</Heading2>
      <List>
        <ListItem>Python, Java, C/C++, SML, OCaml, SQL</ListItem>
      </List>

      <Heading2>Web Development</Heading2>
      <List>
        <ListItem>Frontend: HTML/CSS, JavaScript, React, Next.js, Angular</ListItem>
        <ListItem>Backend: MongoDB, API development, Git, deployment</ListItem>
      </List>

      <Heading2>Data Science</Heading2>
      <List>
        <ListItem>Clustering, classification, regression, network analysis (Pandas, NumPy, Scikit-Learn)</ListItem>
      </List>

      <Heading2>Mathematics and Problem Solving</Heading2>
      <List>
        <ListItem>Strong foundation in calculus, linear algebra, statistics, and algorithm design</ListItem>
      </List>

      <Heading2>Soft Skills</Heading2>
      <List>
        <ListItem>Bilingual in English and Chinese, fluent in Japanese</ListItem>
      </List>
    </MainSection>
  );
}

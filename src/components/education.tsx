import { MainSection, Heading2, Paragraph } from './style';  // Import the styled components

export default function Education() {
  return (
    <MainSection>
      <Heading2>Boston University, Boston, MA</Heading2>
      <Paragraph><strong>BA, Computer Science</strong> September 2022 - May 2025</Paragraph>
      <Paragraph>
        Boston University (BU) is a leading private research university located in the heart of Boston. 
        With a strong focus on innovation and interdisciplinary education, BU offers a comprehensive 
        Computer Science program that emphasizes both foundational knowledge and cutting-edge technologies. 
        I am currently pursuing my Bachelor’s degree in Computer Science, expected to graduate in May 2025.
      </Paragraph>
  
      <Heading2>Crean Lutheran High School, Irvine, CA</Heading2>
      <Paragraph><strong>High School Diploma</strong> August 2018 - June 2022</Paragraph>
      <Paragraph>
        Crean Lutheran High School is a private Christian high school known for its strong academic programs 
        and faith-based education. Located in Irvine, California, Crean Lutheran fosters a supportive environment 
        for students to excel academically, athletically, and spiritually. I graduated with a solid academic 
        foundation in 2022, which prepared me for my journey in higher education.
      </Paragraph>
    </MainSection>
  );
}

import { MainSection, Heading2, Paragraph, ResponsiveImage } from './style'; 
import ProfileImage from '/pic.jpg';
export default function AboutPage() {
  return (
    <MainSection>
      <Heading2>Welcome to my website</Heading2>
     
      <Paragraph>
        My name is Ruyue Xiao, and my preferred name is Selina. I am a Computer Science student at Boston University, expected to graduate in May 2025.
      </Paragraph>
      <ResponsiveImage src={ProfileImage} alt="Selina's Profile Picture" />
      <Paragraph>This is a picture of me.</Paragraph>
    </MainSection>
  );
}

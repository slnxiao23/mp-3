import { FooterStyle, Paragraph } from './style';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <FooterStyle>
      <Paragraph>All rights reserved by Ruyue Xiao <Link to="/credit-page">Credit &copy;</Link></Paragraph> 
    </FooterStyle>
  );
}

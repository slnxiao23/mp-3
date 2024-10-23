import styled from 'styled-components';

// Root Wrapper Styling
export const RootWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #309AD6;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Header Section Styling
export const AppHeader = styled.header`
  background-color: #2176A5;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  color: white;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

// Layout Container for Sidebar and Main Content
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  height: auto;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;

// Sidebar Styling
export const SidebarNav = styled.nav`
  width: 120px;
  background-color: #9ACEEB;
  padding: 20px;
  height: auto;
  box-sizing: border-box;

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 8px;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

// Main Content Area Styling
export const MainSection = styled.main`
  background-color: #CFE8F6;
  padding: 20px;
  flex-grow: 1;
  margin-left: 20px;
  height: auto;
  box-sizing: border-box;

  @media screen and (max-width: 750px) {
    margin-left: 0;
    padding: 10px;
    width: 100%;
  }
`;


export const FooterStyle = styled.footer`
  background-color: #9ACEEB;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
  position: relative;
  bottom: 0;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

// Global Heading Styles
export const Heading1 = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #2176A5;
  margin-bottom: 20px;
  text-align: left;

  @media screen and (max-width: 750px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const Heading2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  text-align: left;

  @media screen and (max-width: 750px) {
    font-size: 24px;
    text-align: center;
  }
`;

// Paragraph Styling
export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;

  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
`;

// Content Section Styling
export const ContentDiv = styled.div`
  background-color: #CFE8F6;
  padding: 40px;
  flex-grow: 1;
  height: auto;
  max-height: none;
  margin-left: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 750px) {
    margin-left: 0;
    padding: 10px;
    width: 100%;
  }
`;

// List Styling
export const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 750px) {
    padding-left: 15px;
  }
`;

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.6;

  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
`;

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px; 
  margin-bottom: 20px;

  @media screen and (max-width: 750px) {
    max-width: 200px;
  }
`;

//calculator

export const CalculatorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  background-image: url('/calculator.jpg');
  background-size: cover; 
  background-position: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 20px auto;

`;

export const Label = styled.label`
  color: #ede8e7;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: white; 
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  flex: 1 1 30%; 
  margin: 5px;
  padding: 20px; 
  font-size: 18px; 
  background-color: #457ec9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

`;

export const Result = styled.h3<{ isNegative: boolean }>`
  color: ${(props) => (props.isNegative ? 'red' : '#333')};
  margin-top: 20px;
  font-size: 18px;
`;

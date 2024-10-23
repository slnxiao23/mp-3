import { Link } from 'react-router-dom';
import { SidebarNav, List, ListItem } from './style';

export default function Navigation() {
  return (
    <SidebarNav>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/project">Project</Link>
        </ListItem>
        <ListItem>
          <Link to="/education">Education</Link>
        </ListItem>
        <ListItem>
          <Link to="/skill">Skill</Link>
        </ListItem>
        <ListItem>
          <Link to="/hobby">Hobby</Link>
        </ListItem>
        <ListItem>
          <Link to="/work-experience">Work Experience</Link>
        </ListItem>
      </List>
    </SidebarNav>
  );
}


import {
  Container, Nav, NavItem
} from './styles';

const Header = (): JSX.Element => {
  const a = '';

  return (
    <Container>
      <Nav>
        <NavItem href="/#home">
          <strong>vinicius rozendo</strong>
        </NavItem>
        <ul>
          <li>
            <NavItem selected href="/#projects">projetos</NavItem>
          </li>
          <li>
            <NavItem href="/#about">sobre</NavItem>
          </li>
          <li>
            <NavItem href="/#contacs">contato</NavItem>
          </li>
        </ul>

      </Nav>
    </Container>
  );
};

export default Header;
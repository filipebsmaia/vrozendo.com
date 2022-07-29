
import {
  Container, Nav, NavItem
} from './styles';

const Header = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = '';

  return (
    <Container>
      <Nav>
        <NavItem href="/#home">
          <strong>vinicius rozendo</strong>
        </NavItem>
        <ul>
          <li>
            <NavItem selected href="/projects/namesa/#projects">projetos</NavItem>
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

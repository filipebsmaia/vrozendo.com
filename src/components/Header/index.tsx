
import {
  Container, Nav, NavItem
} from './styles';

export type HeaderMenuSelected = 'projects' | 'about' | 'contacts';

interface IHeaderProps {
  selected?: HeaderMenuSelected;
}

const Header = ({ selected }: IHeaderProps): JSX.Element => {
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
            <NavItem selected={selected === 'about'} href="/#about">sobre</NavItem>
          </li>
          <li>
            <NavItem selected={selected === 'projects'} href="/#projects">projetos</NavItem>
          </li>
          <li>
            <NavItem selected={selected === 'contacts'} href="/#contacts">contato</NavItem>
          </li>
        </ul>

      </Nav>
    </Container>
  );
};

export default Header;

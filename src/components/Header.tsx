import { Dropdown, Header } from '@navikt/ds-react-internal';
import { ExternalLink, System } from '@navikt/ds-icons';
import React from 'react';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

const onSearch = (personId: string) => {
  return Promise.resolve();
};

const Header1 = () => {
  return (
    <Header>
      <Link to={'/'} className="text-white flex">
        <Header.Title>NAV tiltakspenger</Header.Title>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Dropdown>
        <Header.Button as={Dropdown.Toggle} style={{ marginLeft: 'auto' }}>
          <System title="Systemer og oppslagsverk" />
        </Header.Button>
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item>
              <a
                className="flex"
                href="https://arbeid-og-inntekt.nais.adeo.no/api/v2/redirect/sok/a-inntekt"
              >
                <span className="mr-2">A-inntekt</span>
                <ExternalLink />
              </a>
            </Dropdown.Menu.List.Item>
            <Dropdown.Menu.List.Item>
              <a className="flex" href="https://gosys.intern.nav.no/gosys">
                <span className="mr-2">Gosys</span>
                <ExternalLink />
              </a>
            </Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
      <Header.User name="Kong Harald" />
    </Header>
  );
};

export default Header1;

import React from 'react'
import { Dropdown, Menu,Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://picsum.photos/200/300"></Image>
                <Dropdown pointing="top left" text="Kadir">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

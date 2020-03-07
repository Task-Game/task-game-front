import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleSidebar = () => {
  const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar  compact inverted color='violet' size='large'
        as={Menu}
        animation='slide out'
        icon='bars'
        inverted
        onHide={() => setVisible(true)}
        vertical
        visible={visible}
        width='thin's
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SidebarExampleSidebar

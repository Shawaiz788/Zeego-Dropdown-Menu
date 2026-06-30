import React from 'react';
import { Image, Pressable } from 'react-native';
import * as ContextMenu from 'zeego/context-menu';
const ImageWithContext = () => {

    const contextItems = [
        { title: 'Copy', systemIcon: 'doc.on.doc', action: () => contextActionPress('copy') },
        {
            title: 'Save to Photos',
            systemIcon: 'arrow.down.to.line',
            action: () => contextActionPress('save'),
        },
        {
            title: 'Share',
            systemIcon: 'square.and.arrow.up',
            action: () => contextActionPress('share'),
        },
    ];

    const contextActionPress = (action: string) => {
        console.log('Context action pressed:', action)
    };


    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger>
                <Pressable>
                    <Image
                        source={{ uri: 'https://galaxies.dev/img/projects/star-wars-api.webp' }}
                        style={{ height: 300 }}
                    />
                </Pressable>
            </ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item key="222" >
                    <ContextMenu.ItemTitle>Item 1</ContextMenu.ItemTitle>
                </ContextMenu.Item>
                {contextItems.map((item) => (
                    <ContextMenu.Item key={item.title} onSelect={item.action}>
                        <ContextMenu.ItemTitle>{item.title}</ContextMenu.ItemTitle>
                        <ContextMenu.ItemIcon
                            ios={{
                                name: item.systemIcon,
                                pointSize: 18,
                            }}
                        />
                    </ContextMenu.Item>
                ))}
            </ContextMenu.Content>
        </ContextMenu.Root>
    )
}

export default ImageWithContext
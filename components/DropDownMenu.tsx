import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import * as DropdownMenu from 'zeego/dropdown-menu';
export type Props = {
    items: Array<{
        key: string;
        title: string;
        icon: string;
        iconAndroid?: string;
    }>;
    onSelect: (key: String) => void;
}

type ItemProps = React.ComponentProps<(typeof DropdownMenu)['Item']>; // Type which represents the Item component from the DropdownMenu library 

const GalacticMenuItem = DropdownMenu.create((props: ItemProps) => {
    return <DropdownMenu.Item {...props} />;
}, 'Item');

const DropDownMenu = ({ items, onSelect }: Props) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Ionicons name='ellipsis-horizontal' size={24} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Label>My label</DropdownMenu.Label> {/* //label does not seem to work for android */}

                <DropdownMenu.Item key="42">
                    <DropdownMenu.ItemTitle>My item</DropdownMenu.ItemTitle>
                </DropdownMenu.Item>


                <DropdownMenu.Group>
                    {items.map((item) => (
                        <DropdownMenu.Item key={item.key} onSelect={() => onSelect(item.key)}>
                            <DropdownMenu.ItemTitle>{item.title}</DropdownMenu.ItemTitle>

                            <DropdownMenu.ItemIcon
                                ios={{
                                    name: item.icon,
                                    pointSize: 18,
                                }}
                                androidIconName={item.iconAndroid}
                            />
                        </DropdownMenu.Item>

                    ))}
                </DropdownMenu.Group>

                <DropdownMenu.Group>
                    <GalacticMenuItem key='42'>
                        <DropdownMenu.ItemTitle>Custom Menu Item</DropdownMenu.ItemTitle>
                        <DropdownMenu.ItemSubtitle>Subtitle</DropdownMenu.ItemSubtitle>{/* subtitle does not seem to work for android */}
                    </GalacticMenuItem>

                    <DropdownMenu.CheckboxItem
                        value="on"
                        onValueChange={(next, previous) => {
                            //update state here
                        }}
                        key="check"
                    >
                        <DropdownMenu.ItemTitle>Checkbox Item</DropdownMenu.ItemTitle>
                        <DropdownMenu.ItemIndicator />
                    </DropdownMenu.CheckboxItem>
                </DropdownMenu.Group>

            </DropdownMenu.Content>

        </DropdownMenu.Root>
    )
}

export default DropDownMenu
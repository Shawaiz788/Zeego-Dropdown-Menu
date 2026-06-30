import DropDownMenu from '@/components/DropDownMenu';
import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const index = () => {

  const handleDropdownTriggerPress = (key: String) => {
    console.log('dd trigger pressed: ', key);
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>index</Text>


      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: () => (<DropDownMenu onSelect={handleDropdownTriggerPress} items={[
            {
              key: '1',
              title: 'About the app',
              icon: 'info.circle',
              iconAndroid: 'ic_dialog_info',
            },
            {
              key: '2',
              title: 'FAQ',
              icon: 'questionmark.circle',
              iconAndroid: 'btn_star',
            },
          ]} />

          )
        }}
      />


    </View>
  )
}

export default index
import React from 'react';
import { View, Text } from 'react-native';
import { useTextStyles } from '@src/styles';

// import { Container } from './styles';

const Users: React.FC = () => {
  const { texts } = useTextStyles();
  return (
    <View>
      <Text style={texts.largestPrimaryColor}>Lista de usuarios</Text>
    </View>
  );
};

export default Users;

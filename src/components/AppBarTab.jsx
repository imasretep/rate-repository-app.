import { Text as TabText, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textAppBar,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
    marginHorizontal: 10,
  },
});


const AppBarTab = ({ tabName, route }) => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const onPress = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <Pressable >
      <Link to={route} onPress={tabName === "Sign out" ? onPress : null}>
        <TabText style={styles.text}>{tabName}</TabText>
      </Link>
    </Pressable>

  )
}

export default AppBarTab;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PieIcon from '../assets/icons/Pie';
import {colors, spacing} from '../themes';
import Typography from './Typography';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  username?: string;
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: spacing(2),
    backgroundColor: colors.blue800,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: colors.white,
    marginBottom: spacing(2),
  },
  containerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minWidth: 400,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  slogan: {
    color: 'white',
  },
});

const Layout: React.FC<LayoutProps> = ({children, username}: LayoutProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.center}>
        <PieIcon />
      </View>
      <View style={styles.containerWrapper}>
        {username && (
          <Typography variant="h5" style={styles.username}>{`Xin chào, ${username}`}</Typography>
        )}
        <View style={styles.container}>{children}</View>
      </View>
      <View style={styles.center}>
        <Typography variant="h7" style={styles.slogan}>
          Luôn luôn lắng nghe, luôn luôn thấu hiểu
        </Typography>
      </View>
    </SafeAreaView>
  );
};

export default Layout;

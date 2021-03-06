import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

import {Layout, Typography} from '../components';
import NavigatorMap from '../navigations/NavigatorMap';
import {UnAuthorizedStackParamsList} from '../navigations/types';
import {colors, commonStyles, spacing} from '../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing(2),
    borderRadius: spacing(1),
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(1),
    marginTop: spacing(1),
  },
});

type SetupAccountScreenNavigationProps = StackScreenProps<
  UnAuthorizedStackParamsList,
  NavigatorMap.SetUpAccount
>;

export default function SetUpAccount({navigation}: SetupAccountScreenNavigationProps) {
  const handlePressNext = (): void => {
    // TODO
    navigation.navigate(NavigatorMap.Shops);
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Typography variant="h5" style={commonStyles.header}>
          Thiết lập tài khoản kinh doanh
        </Typography>

        <Typography style={styles.inputLabel}>Tên chủ doanh nghiệp</Typography>
        <TextInput style={commonStyles.input} placeholder="Họ và tên" />

        <Typography style={styles.inputLabel}>Mật khẩu</Typography>
        <TextInput style={commonStyles.input} secureTextEntry placeholder="Bao gồm chữ và số" />

        <Typography style={styles.inputLabel}>Xác nhận mật khẩu</Typography>
        <TextInput
          style={commonStyles.input}
          secureTextEntry
          placeholder="Sử dụng 8 kí tự trở lên, bao gồm chữ và số"
        />

        <TouchableOpacity
          style={[commonStyles.button, {backgroundColor: colors.blue}]}
          onPress={handlePressNext}>
          <Typography variant="h5" style={commonStyles.buttonLabel}>
            Tạo
          </Typography>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

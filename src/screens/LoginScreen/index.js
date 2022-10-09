import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {useDropDown} from '../../modals/DropDownComponentProvider';
import {login, logon} from '../../store/actions/user';
import {styles} from './styles';

function LoginScreen(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {ref} = useDropDown();

  const loginHandler = async () => {
    const response = await props.onLogIn(userName, password);
    if (response?.result) {
      ref.current.alertWithType(
        'success',
        'Login başarılı',
        'Uygulamada gezintiye çık',
      );
    } else {
      ref.current.alertWithType(
        'error',
        'Login başarısız',
        'Kullanıcı bilgilerini kontrol et',
      );
    }
  };

  const logonHandler = async () => {
    const response = await props.onLogOn(userName, password);
    if (response === 0) {
      ref.current.alertWithType('warn', 'Mail kullanılmaktadır.');
    } else if (response === 1) {
      ref.current.alertWithType('warn', 'Mail kullanılamıyor.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input
          onChange={value => setUserName(value)}
          value={userName}
          text="Kullanıcı adı"
          placeholder="birisi@example.com"
        />
        <Input
          onChange={value => setPassword(value)}
          value={password}
          text="Şifre"
          placeholder="******"
          password
        />
        <Button text="Giriş" color="#e9c73a" action={loginHandler} />
        <Button text="Kayıt Ol" action={logonHandler} />
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: (email, password) => dispatch(login(email, password)),
    onLogOn: (email, password) => dispatch(logon(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

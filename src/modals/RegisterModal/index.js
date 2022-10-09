import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import {styles} from './styles';
import Input from '../../components/Input';
import {icons} from '../../theme/icons';
import {connect} from 'react-redux';
import {createUser, logout} from '../../store/actions/user';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDropDown} from '../DropDownComponentProvider';

function RegisterModal(props) {
  const {ref} = useDropDown();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState(new Date().getTime());

  const applyHandle = async () => {
    const response = await props.addUser(name, surname, phone, birthDate);
    ref.current.alertWithType(
      'success',
      'Kayıt başarılı',
      'Uygulamada gezintiye çık',
    );
    props.navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <Text style={styles.header}>Üyeliğini tamamla</Text>
        <View style={styles.row}>
          <Input
            value={name}
            icon={icons.user}
            onChange={value => setName(value)}
            text="İsim"
          />
          <Input
            value={surname}
            icon={icons.user}
            onChange={value => setSurname(value)}
            text="Soyisim"
          />
        </View>
        <Input
          value={phone}
          icon={icons.mobile}
          onChange={value => setPhone(value)}
          text="Telefon Numarası"
        />
        {/* Mail is disabled, because ath -> firebase(email) */}
        <Input
          icon={icons.mail}
          value={'Some Mail Disable'}
          disable
          text="E-Mail"
        />
        <DatePicker
          value={birthDate}
          onChangeDate={value => setBirthDate(value)}
          text="Doğum Tarihi"
          icon={icons.date}
        />
        <Button text="Tamamla" action={applyHandle} icon={icons.smiled} />
        <Button
          text="Vazgeç"
          icon={icons.sad}
          color="red"
          action={() => props.onLogOut()}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logout()),
    addUser: (name, surname, phone, birthDate) =>
      dispatch(createUser(name, surname, phone, birthDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);

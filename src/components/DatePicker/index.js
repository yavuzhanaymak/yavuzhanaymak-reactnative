import React, {useState} from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './styles';

export default function DatePicker({text, icon, value, onChangeDate}) {
  const [date, setDate] = useState(new Date(value));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(new Date(currentDate));
    onChangeDate(new Date(currentDate).getTime());
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.header}>
        {icon && <Image source={icon} />}
        <Text style={styles.textStyle}>{text}:</Text>
      </View>
      <TouchableOpacity onPress={showDatepicker} style={styles.inputContainer}>
        <Text>{new Date(date).toLocaleDateString()}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

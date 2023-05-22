import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16
  },
  serviceCard: {
    width: '32%',
    paddingVertical: 35,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 14
  },
  serviceTitle: {
    color: '#252525',
    textAlign: 'center',
  },
  serviceSubtitle: {
    color: '#787878',
    textAlign: 'center',
  }
});

export default styles;

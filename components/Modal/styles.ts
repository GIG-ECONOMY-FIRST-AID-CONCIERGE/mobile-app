import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    padding: 28,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 4,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    color: '#787878'
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#787878',
    textAlign: 'left',
    marginBottom: 20,
  },
});

export default styles;

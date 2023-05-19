import { StyleSheet } from 'react-native';

const styles = (props: any) => StyleSheet.create({
    buttonActions: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        color: props.variant == 'confirm' ? '#1369E8' : '#F3485A',
        backgroundColor: '#fff',
    },
    buttonPrimary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default styles;

  